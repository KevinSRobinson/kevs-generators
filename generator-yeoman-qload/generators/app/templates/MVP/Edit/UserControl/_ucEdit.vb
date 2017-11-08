Imports Qload.Data.Repos.ViewModels
Imports Qload.Winforms.CRM.Branches.Edit


Public Class ucEdit<%=data.model.title%>
        Implements <%=data.interfaceName%>


        Private ReadOnly _repositoryManager As IRepositoryManager
        Private ReadOnly _customerId As Integer


#Region "Constuctors"

        Public Sub New(customerId As Integer, repositoryManager As IRepositoryManager)
            InitializeComponent()

            _customerId = customerId
            _repositoryManager = repositoryManager

            SetUpForm()
        End Sub

#End Region

#Region "Private Methods"

        Private Sub SetUpForm()
            Me.Dock = DockStyle.Fill

        End Sub

#End Region

#Region "Properties"

        Public Property <%=data.model.title%> As <%=data.model.title%>ViewModel Implements <%=data.interfaceName%>.<%=data.model.title%>
            Set
                    <%= data.getViewModelPropertyFields() %>             
            End Set
             Get
                Return New BranchViewModel() With {
                         <%= data.getViewModelPropertyGetFields() %>        
                End Get
        End Property


        Public ReadOnly Property IsValid As Boolean Implements <%=data.interfaceName%>.IsValid
            Get
                Return Me.ValidationProvider.Validate()
            End Get
        End Property

#End Region
    End Class