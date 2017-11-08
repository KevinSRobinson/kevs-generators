Imports System.Collections.Generic
Imports Qload.Data
Imports Qload.Data.Manager
Imports Qload.Data.Repos.ViewModels
Imports Qload.Winforms.CRM.<%=data.plural%>.Details
Imports Qload.Winforms.CRM.<%=data.plural%>.List

Namespace CRM.<%=data.plural%>.MasterDetails
    Public Class Uc<%=data.plural%>MasterDetails
        Implements I<%=data.plural%>MasterDetailsView

        Private _presenter As <%=data.plural%>MasterDetailsPresenter
        Private WithEvents _<%=data.plural%>ListView As I<%=data.plural%>ListView
        Private WithEvents _repo As IRepositoryManager
        Private ReadOnly _<%=data.name%>DetailsView As I<%=data.name%>DetailsView
        Private <%=data.name%>Data As Tuple(Of Integer, ActivityParent)

#Region "Events"
        Public Event ViewLoad As EventHandler(Of EventArgs) Implements I<%=data.plural%>MasterDetailsView.ViewLoad
        Public Event Loading As EventHandler(Of EventArgs) Implements I<%=data.plural%>MasterDetailsView.Loading
        Public Event Add<%=data.name%> As EventHandler(Of EventArgs) Implements I<%=data.plural%>MasterDetailsView.Add<%=data.name%>
        Public Event LoadingProject<%=data.plural%> As EventHandler(Of EventArgs) Implements I<%=data.plural%>MasterDetailsView.LoadingProject<%=data.plural%>

#End Region

#Region "Constructors"

        Public Sub New(resositoryManager As IRepositoryManager)
            ' This call is required by the designer.
            InitializeComponent()

            Me.Dock = DockStyle.Fill

            _repo = resositoryManager

            _<%=data.plural%>ListView = New Uc<%=data.plural%>ListView(_repo)
            _<%=data.name%>DetailsView = New Uc<%=data.name%>DetailsView(_repo)

            If Not IsNothing(<%=data.name%>DetailsFieldsInline) AndAlso <%=data.name%>DetailsFieldsInline Then
                _<%=data.name%>DetailsView.SetFieldPosition(FieldPosition.Inline)
            End If

            _presenter = New <%=data.plural%>MasterDetailsPresenter(Me, _<%=data.plural%>ListView, _<%=data.name%>DetailsView, _repo)

            SetupView()

        End Sub

#End Region

#Region "Setup View"
        Private Sub SetupView()

            ''Inject the user controls into the form
            Me.pcList.Controls.Add(_<%=data.plural%>ListView)

            Me.pcDetails.Controls.Add(_<%=data.name%>DetailsView)
        End Sub

#End Region

#Region "Event Handlers"

        Public Sub LoadData(id As Integer) Implements I<%=data.plural%>MasterDetailsView.LoadData

            EnquiryId = id

            If Not (IsLoading) Then
                RaiseEvent Loading(Nothing, New EventArgs())
            End If

        End Sub


        Public Sub LoadProjects<%=data.plural%>(id As Integer) Implements I<%=data.plural%>MasterDetailsView.LoadProjects<%=data.plural%>

            EnquiryId = id

            If Not (IsLoading) Then
                RaiseEvent LoadingProject<%=data.plural%>(Nothing, New EventArgs())
            End If

        End Sub

        Public Sub LoadByCompanyId(companyId As Integer) Implements I<%=data.plural%>MasterDetailsView.LoadByCompanyId
            _<%=data.plural%>ListView.LoadByCompanyId(companyId)
        End Sub

        Public Sub EnableCompactView() Implements I<%=data.plural%>MasterDetailsView.EnableCompactView
            _<%=data.plural%>ListView.EnableCompactView()
        End Sub


        Private Sub bbiAdd<%=data.name%>_ItemClick(sender As Object, e As DevExpress.XtraBars.ItemClickEventArgs)
            RaiseEvent Add<%=data.name%>(sender, e)
        End Sub

        Public Sub ShowAdd<%=data.name%>(Id As Integer) Implements I<%=data.plural%>MasterDetailsView.ShowAdd<%=data.name%>
            If Not (IsLoading) Then
                RaiseEvent Add<%=data.name%>(Nothing, New EventArgs())
            End If
        End Sub




#End Region

#Region "Properties"
        Public Property IsLoading As Boolean Implements I<%=data.plural%>MasterDetailsView.IsLoading

        Public Property <%=data.name%>DetailsFieldsInline As Boolean Implements I<%=data.plural%>MasterDetailsView.<%=data.name%>DetailsFieldsInline



        Public Property EnquiryId As Integer Implements I<%=data.plural%>MasterDetailsView.EnquiryId

        Public Property <%=data.plural%> As List(Of <%=data.plural%>ViewModel) Implements I<%=data.plural%>MasterDetailsView.<%=data.plural%>
            Get
                Return _<%=data.plural%>ListView.<%=data.plural%>
            End Get
            Set(value As List(Of <%=data.plural%>ViewModel))
                _<%=data.plural%>ListView.<%=data.plural%> = value
            End Set
        End Property

        Public Property Enquiry<%=data.name%>ColumnVisible As Boolean Implements I<%=data.plural%>MasterDetailsView.Enquiry<%=data.name%>ColumnVisible
            Get
                Return _<%=data.plural%>ListView.Enquiry<%=data.name%>ColumnVisible
            End Get
            Set(value As Boolean)
                _<%=data.plural%>ListView.Enquiry<%=data.name%>ColumnVisible = value
            End Set
        End Property

        Public Property Primary<%=data.name%>ColumnVisible As Boolean Implements I<%=data.plural%>MasterDetailsView.Primary<%=data.name%>ColumnVisible
            Get
                Return _<%=data.plural%>ListView.Enquiry<%=data.name%>ColumnVisible
            End Get
            Set(value As Boolean)
                _<%=data.plural%>ListView.Primary<%=data.name%>ColumnVisible = value
            End Set
        End Property
#End Region

#Region "Public Methods"
        Public Sub FilterOutEnquiry<%=data.plural%>() Implements I<%=data.plural%>MasterDetailsView.FilterOutEnquiry<%=data.plural%>
            _<%=data.plural%>ListView.FilterOutEnquiry<%=data.plural%>()
        End Sub

        Public Sub SetFirstSelectedRow() Implements I<%=data.plural%>MasterDetailsView.SetFirstSelectedRow
            _<%=data.plural%>ListView.SetFirstSelectedRow()
        End Sub

#End Region


    End Class
End Namespace
