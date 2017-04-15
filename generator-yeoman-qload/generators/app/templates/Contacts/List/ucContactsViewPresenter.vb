Imports QLoad.BusinessObjects.Manager
Imports QLoad.BusinesssObjects.Manager

Namespace CRM.<%=ClassName%>s.List
    <CLSCompliant(False)>
    Public Class Uc<%=ClassName%>sViewPresenter
        Private ReadOnly _view As I<%=ClassName%>sListView

        Private ReadOnly _repos As IRepositoryManager


#Region "Constructors"

        Public Sub New(view As I<%=ClassName%>sListView, repos As IRepositoryManager)

            Me._view = view
            Me._repos = repos


            '' AddHandler view.ViewLoad, AddressOf OnLoad
            AddHandler view.Add<%=ClassName%>, AddressOf OnAdd<%=ClassName%>
        End Sub

   

#End Region

        Private Sub OnAdd<%=ClassName%>(sender As Object, e As EventArgs)
          
        End Sub

        Private Sub OnLoad(sender As Object, e As EventArgs)
            _view.<%=ClassName%>s = _repos.<%=ClassName%>s.GetXpCollection()
        End Sub
    End Class
End Namespace