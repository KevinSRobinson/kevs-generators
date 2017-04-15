Imports DevExpress.Xpo
Imports QLoad.BusinesssObjects.Classes
Imports Qload.BusinesssObjects.Common

Namespace CRM.ActivityDto.List
    Public Interface IContactsListView

        Event Add As EventHandler(Of EventArgs)

        Property ActivityDtos As IEnumerable(Of ActivityDto)

        Event SelectionChanged As EventHandler(Of EventArgs(of ActivityDto))

    End Interface
End Namespace