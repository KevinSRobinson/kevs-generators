Imports DevExpress.XtraGrid.Views.Grid
Imports Qload.BusinesssObjects.Common
Imports QLoad.BusinesssObjects.Manager

Namespace CRM.Contacts.List
    Public Class UcContactsListView
        Implements IContactsListView


        Public Event AddContact(sender As Object, e As EventArgs) Implements IContactsListView.AddContact
        Public Event SelectionChanged As EventHandler(Of EventArgs(Of Contact)) Implements IContactsListView.SelectionChanged

#Region "Constructors"

        Public Sub New(resositoryManager As RepositoryManager)

            InitializeComponent()

            AddHandler Me.bbiAddContact.ItemClick, AddressOf AddContactClick

            Me.Dock = DockStyle.Fill

            Dim presenter = New UcContactsViewPresenter(Me, resositoryManager)
        End Sub

#End Region

#Region "Selection Canged"
        Private Sub gvActivities_RowClick(sender As Object, e As RowClickEventArgs) Handles gvContacts.RowClick
            Dim contact As Contact = CType(gvContacts.GetRow(e.RowHandle), Contact)
            RaiseEvent SelectionChanged(sender, New EventArgs(Of Contact)(contact))
        End Sub
#End Region

#Region "Event Handlers"

        Private Sub AddContactClick()
            RaiseEvent AddContact(Me, EventArgs.Empty)
        End Sub

#End Region

#Region "Properties"

        Public Property Contacts As IEnumerable(Of Contact) Implements IContactsListView.Contacts
            Get
                Return gcContacts.DataSource
            End Get
            Set
                gcContacts.DataSource = Value
            End Set
        End Property

        Private Sub bbiAddContact_ItemClick(sender As Object, e As DevExpress.XtraBars.ItemClickEventArgs) Handles bbiAddContact.ItemClick
            RaiseEvent AddContact(sender, e)
        End Sub


#End Region

    End Class
End Namespace