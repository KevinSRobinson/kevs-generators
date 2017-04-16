Imports DevExpress.Xpo
Imports QLoad.BusinesssObjects.Classes
Imports Qload.BusinesssObjects.Common

Namespace CRM.contactDto.List
    Public Interface IContactsListView

        Event Add As EventHandler(Of EventArgs)

        Property contactDtos As IEnumerable(Of contactDto)

        Event SelectionChanged As EventHandler(Of EventArgs(of contactDto))

    End Interface
End Namespace