Imports System.Collections.Generic
Imports Qload.Data
Imports Qload.Data.Manager
Imports Qload.Winforms.CRM.Branches.List

Public Class uc<%=data.name%>List
         Implements <%=data.interfaceName%>

          Private ReadOnly _repositoryManager As RepositoryManager
         Private _selectedGridRow As Integer = 0
#Region "Constructors"
       Public Event SelectionChanged As EventHandler(Of EventArgs(Of <%=data.name%>ViewModel))   Implements <%=data.interfaceName%>.SelectionChanged
       Public Event Add As EventHandler(Of EventArgs) Implements <%=data.interfaceName%>.Add
#End Region



#Region "Constructors"

        Public Sub New(repositoryManager As IRepositoryManager)

            ' This call is required by the designer.
            InitializeComponent()

            Me.Dock = DockStyle.Fill
            _repositoryManager = repositoryManager


          '  Dim presenter = New EnquiriesListPresenter(Me, repositoryManager)

           ' SetupView()

        End Sub

#End Region


#Region "Properties"

        Public Property Loading As Boolean Implements <%=data.interfaceName%>.Loading

        Public Property <%=data.plural%> As List(Of <%=data.name%>ViewModel) Implements <%=data.interfaceName%>.<%=data.plural%>
            Get
                Return Me.gc<%=data.plural%>.DataSource
            End Get
            Set
                Me.gc<%=data.plural%>.DataSource = Value               
                If _selectedGridrow <> 0 Then
                    Me.gv<%=data.plural%>.FocusedRowHandle = _selectedGridrow
                End If
            End Set
        End Property



#End Region

End Class