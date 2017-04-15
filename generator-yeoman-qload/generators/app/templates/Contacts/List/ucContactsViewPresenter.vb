Imports QLoad.BusinessObjects.Manager
Imports QLoad.BusinesssObjects.Manager

Namespace CRM.Contacts.List
    <CLSCompliant(False)>
    Public Class UcContactsViewPresenter
        Private ReadOnly _view As IContactsListView

        Private ReadOnly _repos As IRepositoryManager


#Region "Constructors"

        Public Sub New(view As IContactsListView, repos As IRepositoryManager)

            Me._view = view
            Me._repos = repos


            '' AddHandler view.ViewLoad, AddressOf OnLoad
            AddHandler view.AddContact, AddressOf OnAddContact
        End Sub

   

#End Region

        Private Sub OnAddContact(sender As Object, e As EventArgs)
          
        End Sub

        Private Sub OnLoad(sender As Object, e As EventArgs)
            _view.Contacts = _repos.Contacts.GetXpCollection()
        End Sub
    End Class
End Namespace