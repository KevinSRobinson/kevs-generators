Imports DevExpress.Xpo
Imports QLoad.BusinesssObjects.Classes
Imports Qload.BusinesssObjects.Common

Namespace CRM.<%= DtoName %>.List
    Public Interface IContactsListView

        Event Add As EventHandler(Of EventArgs)

        Property <%= DtoName %>s As IEnumerable(Of <%= DtoName %>)

        Event SelectionChanged As EventHandler(Of EventArgs(of <%= DtoName %>))

    End Interface
End Namespace