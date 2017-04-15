Imports QLoad.BusinesssObjects.Common
Imports QLoad.BusinesssObjects.Manager
Imports QLoad.CRM.Contacts.Details
Imports QLoad.CRM.Contacts.List

Namespace CRM.Contacts.MasterDetails
    Public Class ContactsMasterDetailsPresenter

        Private ReadOnly _repo As RepositoryManager
        Private ReadOnly _view As IContactsMasterDetailsView
        Private WithEvents _contactsListView As IContactsListView
        Private ReadOnly _contactDetailsView As IContactDetailsView


#Region "Constructors"

        Public Sub New(view As IContactsMasterDetailsView, contactsListView As IContactsListView,
                       contactDetailsView As IContactDetailsView, repo As IRepositoryManager)
            _view = view
            _repo = repo

            _contactsListView = contactsListView
            _contactDetailsView = contactDetailsView

            AddHandler _contactsListView.SelectionChanged, AddressOf OnActivitySelected
        End Sub

#End Region


        Private Sub OnActivitySelected(sender As Object, e As EventArgs(Of Contact))
            _contactDetailsView.Contact = e.Data
        End Sub
    End Class
End Namespace