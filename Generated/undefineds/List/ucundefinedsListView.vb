Imports DevExpress.XtraGrid.Views.Grid
Imports Qload.BusinesssObjects.Common
Imports QLoad.BusinesssObjects.Manager

Namespace CRM.Contacts.List
    Public Class UcsListView
        Implements IsListView


        Public Event AddC(sender As Object, e As EventArgs) Implements IsListView.AddContact
        Public Event SelectionChanged As EventHandler(Of EventArgs(Of )) Implements IsListView.SelectionChanged

#Region "Constructors"

        Public Sub New(resositoryManager As RepositoryManager)

            InitializeComponent()

            AddHandler Me.bbiAdd.ItemClick, AddressOf AddClick

            Me.Dock = DockStyle.Fill

            Dim presenter = New UcsViewPresenter(Me, resositoryManager)
        End Sub

#End Region

#Region "Selection Canged"
        Private Sub gvActivities_RowClick(sender As Object, e As RowClickEventArgs) Handles gvs.RowClick
            Dim contact As  = CType(gvContacts.GetRow(e.RowHandle), )
            RaiseEvent SelectionChanged(sender, New EventArgs(Of )())
        End Sub
#End Region

#Region "Event Handlers"

        Private Sub AddClick()
            RaiseEvent Add(Me, EventArgs.Empty)
        End Sub

#End Region

#Region "Properties"

        Public Property s As IEnumerable(Of Contact) Implements IContactsListView.s
            Get
                Return gcs.DataSource
            End Get
            Set
                gcs.DataSource = Value
            End Set
        End Property

        Private Sub bbiAdd_ItemClick(sender As Object, e As DevExpress.XtraBars.ItemClickEventArgs) Handles bbiAdds.ItemClick
            RaiseEvent Add(sender, e)
        End Sub


#End Region

    End Class
End Namespace