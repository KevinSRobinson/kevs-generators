Imports Qload.Data.Manager

Namespace CRM.<%=data.plural%>.List
    <CLSCompliant(False)>
    Public Class Uc<%=data.presenterName%>sViewPresenter
        Private ReadOnly _view As <%=data.interfaceName%>
        Private ReadOnly _repositoryManager As IRepositoryManager
        'Private WithEvents _createView As ICreateEnquiryView

#Region "Constructors"

        Public Sub New(view As <%=data.interfaceName%>, repositoryManager As RepositoryManager)
            Me._repositoryManager = repositoryManager
            Me._view = view
            Me._view.Loading = False

            '_createView = createEnquiryView

            WireUpEvents()         
        End Sub

        Private Sub WireUpEvents()
           ' AddHandler _view.Editing, AddressOf OnEditing
           ' AddHandler _view.Adding, AddressOf OnAdding
     
        End Sub

#End Region

#Region "Event Handlers"
  
        Private Sub OnAddEnquiry(sender As Object, e As EventArgs)
            'ShowAddEnquiryDialog()
        End Sub

        Private Sub OnEditEnquiry(sender As Object, e As EventArgs(Of Integer))
            'ShowEditEnqiryDialog(e.Data)
        End Sub

#End Region

#Region "Private Methods"


#End Region

    End Class
End Namespace
