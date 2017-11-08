Imports Qload.Data
Imports Qload.Data.Manager

Namespace CRM.<%=data.plural%>.Add
    Public Class FrmEdit<%=data.name%>
        Implements IModify<%=data.name%>DialogView


        Private ReadOnly _edit<%=data.name%> As ucEdit<%=data.name%>
        Private ReadOnly _repositoryManager As IRepositoryManager
        Private ReadOnly _customerId As Integer

#Region "Constructors"
        Public Sub New(customerId As Integer, repositoryManager As IRepositoryManager)

            ' This call is required by the designer.
            InitializeComponent()


            _customerId = customerId
            _repositoryManager = repositoryManager
            _edit<%=data.name%> = New ucEdit<%=data.name%>()

            Me.pc<%=data.name%>.Controls.Add(_edit<%=data.name%>)
        End Sub

#End Region

#Region "Public Methods"
        Public Sub DisplayDialog() Implements IModify<%=data.name%>DialogView.DisplayDialog
            Me.ShowDialog()
        End Sub

        Private Sub sbOK_Click(sender As Object, e As EventArgs) Handles sbOK.Click

            Dim <%=data.camelCase%>ToSave As <%=data.camelCase%> = Me._edit<%=data.name%>.<%=data.name%>
            <%= data.camelCase %>oSave.CustomerId = _customerId

            _repositoryManager.<%=data.name%>.CreateUpdate<%=data.name%>(<%=data.camelCase%>ToSave)

        End Sub
#End Region




    End Class
End Namespace