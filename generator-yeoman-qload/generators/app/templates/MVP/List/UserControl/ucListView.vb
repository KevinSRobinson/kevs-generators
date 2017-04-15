Imports DevExpress.XtraGrid.Views.Grid
Imports Qload.BusinesssObjects.Common
Imports QLoad.BusinesssObjects.Manager

Namespace CRM.Contacts.List
    Public Class Uc<%=ClassName%>sListView
        Implements I<%=ClassName%>sListView


        Public Event AddC<%=ClassName%>(sender As Object, e As EventArgs) Implements I<%=ClassName%>sListView.AddContact
        Public Event SelectionChanged As EventHandler(Of EventArgs(Of <%=ClassName%>)) Implements I<%=ClassName%>sListView.SelectionChanged

#Region "Constructors"

        Public Sub New(resositoryManager As RepositoryManager)

            InitializeComponent()

            AddHandler Me.bbiAdd<%=ClassName%>.ItemClick, AddressOf Add<%=ClassName%>Click

            Me.Dock = DockStyle.Fill

            Dim presenter = New Uc<%=ClassName%>sViewPresenter(Me, resositoryManager)
        End Sub

#End Region

#Region "Selection Canged"
        Private Sub gvActivities_RowClick(sender As Object, e As RowClickEventArgs) Handles gv<%=ClassName%>s.RowClick
            Dim contact As <%=ClassName%> = CType(gvContacts.GetRow(e.RowHandle), <%=ClassName%>)
            RaiseEvent SelectionChanged(sender, New EventArgs(Of <%=ClassName%>)(<%=ClassName%>))
        End Sub
#End Region

#Region "Event Handlers"

        Private Sub Add<%=ClassName%>Click()
            RaiseEvent Add<%=ClassName%>(Me, EventArgs.Empty)
        End Sub

#End Region

#Region "Properties"

        Public Property <%=ClassName%>s As IEnumerable(Of Contact) Implements IContactsListView.<%=ClassName%>s
            Get
                Return gc<%=ClassName%>s.DataSource
            End Get
            Set
                gc<%=ClassName%>s.DataSource = Value
            End Set
        End Property

        Private Sub bbiAdd<%=ClassName%>_ItemClick(sender As Object, e As DevExpress.XtraBars.ItemClickEventArgs) Handles bbiAdd<%=ClassName%>s.ItemClick
            RaiseEvent Add<%=ClassName%>(sender, e)
        End Sub


#End Region

    End Class
End Namespace