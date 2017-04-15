Imports DevExpress.XtraGrid.Views.Grid
Imports Qload.BusinesssObjects.Common
Imports QLoad.BusinesssObjects.Manager

Namespace CRM.Contacts.List
    Public Class UcContactsListView
        Implements IContactsListView


        Public Event AddCOrganisation(sender As Object, e As EventArgs) Implements IOrganisationsListView.AddContact
        Public Event SelectionChanged As EventHandler(Of EventArgs(Of Organisation)) Implements IOrganisationsListView.SelectionChanged

#Region "Constructors"

        Public Sub New(resositoryManager As RepositoryManager)

            InitializeComponent()

            AddHandler Me.bbiAddOrganisation.ItemClick, AddressOf AddOrganisationClick

            Me.Dock = DockStyle.Fill

            Dim presenter = New UcOrganisationsViewPresenter(Me, resositoryManager)
        End Sub

#End Region

#Region "Selection Canged"
        Private Sub gvActivities_RowClick(sender As Object, e As RowClickEventArgs) Handles gvOrganisations.RowClick
            Dim contact As Organisation = CType(gvContacts.GetRow(e.RowHandle), Organisation)
            RaiseEvent SelectionChanged(sender, New EventArgs(Of Organisation)(Organisation))
        End Sub
#End Region

#Region "Event Handlers"

        Private Sub AddOrganisationClick()
            RaiseEvent AddOrganisation(Me, EventArgs.Empty)
        End Sub

#End Region

#Region "Properties"

        Public Property Organisations As IEnumerable(Of Contact) Implements IContactsListView.Organisations
            Get
                Return gcOrganisations.DataSource
            End Get
            Set
                gcOrganisations.DataSource = Value
            End Set
        End Property

        Private Sub bbiAddOrganisation_ItemClick(sender As Object, e As DevExpress.XtraBars.ItemClickEventArgs) Handles bbiAddOrganisations.ItemClick
            RaiseEvent AddOrganisation(sender, e)
        End Sub


#End Region

    End Class
End Namespace