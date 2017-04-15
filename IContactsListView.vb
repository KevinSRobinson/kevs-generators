Imports DevExpress.Xpo
Imports QLoad.BusinesssObjects.Classes
Imports Qload.BusinesssObjects.Common

Namespace CRM.Contacts.List
    Public Interface IContactsListView

        Event AddContact As EventHandler(Of EventArgs)

        Property Contacts As IEnumerable(Of Contact)

        Event SelectionChanged As EventHandler(Of EventArgs(of Contact))
    End Interface
End Namespace