Imports QLoad.BusinessObjects.Manager
Imports QLoad.BusinesssObjects.Manager

Namespace CRM.Activitys.List
    <CLSCompliant(False)>
    Public Class UcActivitysViewPresenter
        Private ReadOnly _view As IActivitysListView

        Private ReadOnly _repos As IRepositoryManager


#Region "Constructors"

        Public Sub New(view As IActivitysListView, repos As IRepositoryManager)

            Me._view = view
            Me._repos = repos


            '' AddHandler view.ViewLoad, AddressOf OnLoad
            AddHandler view.AddActivity, AddressOf OnAddActivity
        End Sub

   

#End Region

        Private Sub OnAddActivity(sender As Object, e As EventArgs)
          
        End Sub

        Private Sub OnLoad(sender As Object, e As EventArgs)
            _view.Activitys = _repos.Activitys.GetXpCollection()
        End Sub
    End Class
End Namespace