Imports DevExpress.Xpo
Imports QLoad.BusinesssObjects.Classes
Imports Qload.BusinesssObjects.Common

Namespace CRM.OrganisationDto.List
    Public Interface IContactsListView

        Event Add As EventHandler(Of EventArgs)

        Property OrganisationDtos As IEnumerable(Of OrganisationDto)

        Event SelectionChanged As EventHandler(Of EventArgs(of OrganisationDto))

    End Interface
End Namespace