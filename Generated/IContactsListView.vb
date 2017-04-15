Imports DevExpress.Xpo
Imports QLoad.BusinesssObjects.Classes
Imports Qload.BusinesssObjects.Common

Namespace CRM.Organisation.List
    Public Interface IContactsListView

        Event Add As EventHandler(Of EventArgs)

        Property Organisations As IEnumerable(Of Organisation)

        Event SelectionChanged As EventHandler(Of EventArgs(of Organisation))

    End Interface
End Namespace