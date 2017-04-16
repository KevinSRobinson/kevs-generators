Imports DevExpress.XtraGrid.Views.Grid
Imports Qload.BusinesssObjects.Common
Imports QLoad.BusinesssObjects.Manager

Namespace CRM.Contacts.List
    Public Class UccontactsListView
        Implements IcontactsListView


        Public Event AddCcontact(sender As Object, e As EventArgs) Implements IcontactsListView.AddContact
        Public Event SelectionChanged As EventHandler(Of EventArgs(Of contact)) Implements IcontactsListView.SelectionChanged

#Region "Constructors"

        Public Sub New(resositoryManager As RepositoryManager)

            InitializeComponent()

            AddHandler Me.bbiAddcontact.ItemClick, AddressOf AddcontactClick

            Me.Dock = DockStyle.Fill

            Dim presenter = New UccontactsViewPresenter(Me, resositoryManager)
        End Sub

#End Region

#Region "Selection Canged"
        Private Sub gvActivities_RowClick(sender As Object, e As RowClickEventArgs) Handles gvcontacts.RowClick
            Dim contact As contact = CType(gvContacts.GetRow(e.RowHandle), contact)
            RaiseEvent SelectionChanged(sender, New EventArgs(Of contact)(contact))
        End Sub
#End Region

#Region "Event Handlers"

        Private Sub AddcontactClick()
            RaiseEvent Addcontact(Me, EventArgs.Empty)
        End Sub

#End Region

#Region "Properties"

        Public Property contacts As IEnumerable(Of Contact) Implements IContactsListView.contacts
            Get
                Return gccontacts.DataSource
            End Get
            Set
                gccontacts.DataSource = Value
            End Set
        End Property

        Private Sub bbiAddcontact_ItemClick(sender As Object, e As DevExpress.XtraBars.ItemClickEventArgs) Handles bbiAddcontacts.ItemClick
            RaiseEvent Addcontact(sender, e)
        End Sub


#End Region

    End Class
End Namespace