Imports QLoad.BusinessObjects.Manager
Imports QLoad.BusinesssObjects.Manager

Namespace CRM.Organisations.List
    <CLSCompliant(False)>
    Public Class UcOrganisationsViewPresenter
        Private ReadOnly _view As IOrganisationsListView

        Private ReadOnly _repos As IRepositoryManager


#Region "Constructors"

        Public Sub New(view As IOrganisationsListView, repos As IRepositoryManager)

            Me._view = view
            Me._repos = repos


            '' AddHandler view.ViewLoad, AddressOf OnLoad
            AddHandler view.AddOrganisation, AddressOf OnAddOrganisation
        End Sub

   

#End Region

        Private Sub OnAddOrganisation(sender As Object, e As EventArgs)
          
        End Sub

        Private Sub OnLoad(sender As Object, e As EventArgs)
            _view.Organisations = _repos.Organisations.GetXpCollection()
        End Sub
    End Class
End Namespace