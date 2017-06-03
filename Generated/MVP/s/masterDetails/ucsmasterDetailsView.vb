
Imports DevExpress.Xpo
Imports QLoad.BusinessObjects.Manager
Imports QLoad.BusinesssObjects.Classes
Imports Qload.BusinesssObjects.Common
Imports QLoad.BusinesssObjects.Manager
Imports QLoad.BusinesssObjects.Repos
Imports QLoad.CRM.Contacts.Details
Imports QLoad.CRM.Contacts.List
Imports QLoad.CRM.Enquiries.MasterDetail
Imports QLoad.Winforms.CRM.Contacts.Details
Imports QLoad.Winforms.CRM.Contacts.List

Namespace CRM.Contacts.MasterDetails
    Public Class UcContactsMasterDetails
        Implements IContactsMasterDetailsView

        Private _presenter As ContactsMasterDetailsPresenter

        Public Event ViewLoad As EventHandler(Of EventArgs) Implements IContactsMasterDetailsView.ViewLoad
        Private WithEvents _contactsListView As IContactsListView
        Private WithEvents _enquiriesMasterDetailView As IEnquiriesMasterDetailView
        Private ReadOnly _contactDetailsView As IContactDetailsView
        Private ReadOnly _resositoryManager As IRepositoryManager

#Region "Constuctors"

        Public Sub New(_enquiriesMasterDetailView As IEnquiriesMasterDetailView, resositoryManager As IRepositoryManager)

            ' This call is required by the designer.
            InitializeComponent()

            Me.Dock = DockStyle.Fill
            Dim repositoryManager = New RepositoryManager(New UnitOfWork())
            _contactsListView = New UcContactsListView(repositoryManager)
            _contactDetailsView = New UcContactDetailsView(repositoryManager)


            _presenter = New ContactsMasterDetailsPresenter(Me, _contactsListView, _contactDetailsView, repositoryManager)

            _resositoryManager = resositoryManager
            PopulateControls()
        End Sub

#End Region

        Private Sub CrmContactsTabTab_Load(sender As Object, e As EventArgs) Handles MyBase.Load
            RaiseEvent ViewLoad(Me, e)
        End Sub

        Private Sub PopulateControls()
            Me.grpList.Controls.Add(_contactsListView)
            Me.grpDetails.Controls.Add(_contactDetailsView)
        End Sub

        Private Sub _contactsListView_OnSelectionChanged(sender As Object, e As EventArgs(Of Contact)) _
            Handles _contactsListView.SelectionChanged
            _contactDetailsView.Contact = e.Data
        End Sub

        Public Sub LoadData(enquiry As EnquiryDto) Implements IContactsMasterDetailsView.LoadData
            _contactsListView.Contacts = _resositoryManager.OpportunityContacts.GetListByOpportunityId(enquiry.Id)
        End Sub
    End Class
End Namespace
