Imports DevExpress.XtraGrid.Views.Grid
Imports Qload.BusinesssObjects.Common
Imports QLoad.BusinesssObjects.Manager

Namespace CRM.Contacts.List
    Public Class UcActivitysListView
        Implements IActivitysListView


        Public Event AddCActivity(sender As Object, e As EventArgs) Implements IActivitysListView.AddContact
        Public Event SelectionChanged As EventHandler(Of EventArgs(Of Activity)) Implements IActivitysListView.SelectionChanged

#Region "Constructors"

        Public Sub New(resositoryManager As RepositoryManager)

            InitializeComponent()

            AddHandler Me.bbiAddActivity.ItemClick, AddressOf AddActivityClick

            Me.Dock = DockStyle.Fill

            Dim presenter = New UcActivitysViewPresenter(Me, resositoryManager)
        End Sub

#End Region

#Region "Selection Canged"
        Private Sub gvActivities_RowClick(sender As Object, e As RowClickEventArgs) Handles gvActivitys.RowClick
            Dim contact As Activity = CType(gvContacts.GetRow(e.RowHandle), Activity)
            RaiseEvent SelectionChanged(sender, New EventArgs(Of Activity)(Activity))
        End Sub
#End Region

#Region "Event Handlers"

        Private Sub AddActivityClick()
            RaiseEvent AddActivity(Me, EventArgs.Empty)
        End Sub

#End Region

#Region "Properties"

        Public Property Activitys As IEnumerable(Of Contact) Implements IContactsListView.Activitys
            Get
                Return gcActivitys.DataSource
            End Get
            Set
                gcActivitys.DataSource = Value
            End Set
        End Property

        Private Sub bbiAddActivity_ItemClick(sender As Object, e As DevExpress.XtraBars.ItemClickEventArgs) Handles bbiAddActivitys.ItemClick
            RaiseEvent AddActivity(sender, e)
        End Sub


#End Region

    End Class
End Namespace