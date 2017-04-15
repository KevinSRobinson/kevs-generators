Imports QLoad.BusinessObjects.Manager
Imports QLoad.BusinesssObjects.Manager

Namespace CRM.contacts.List
    <CLSCompliant(False)>
    Public Class UccontactsViewPresenter
        Private ReadOnly _view As IcontactsListView

        Private ReadOnly _repos As IRepositoryManager


#Region "Constructors"

        Public Sub New(view As IcontactsListView, repos As IRepositoryManager)

            Me._view = view
            Me._repos = repos


            '' AddHandler view.ViewLoad, AddressOf OnLoad
            AddHandler view.Addcontact, AddressOf OnAddcontact
        End Sub

   

#End Region

        Private Sub OnAddcontact(sender As Object, e As EventArgs)
          
        End Sub

        Private Sub OnLoad(sender As Object, e As EventArgs)
            _view.contacts = _repos.contacts.GetXpCollection()
        End Sub
    End Class
End Namespace