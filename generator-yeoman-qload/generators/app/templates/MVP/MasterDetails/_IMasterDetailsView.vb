
Imports System.Collections.Generic
Imports Qload.Data.Repos.ViewModels

Namespace CRM.<%=data.plural%>.MasterDetails
    Public Interface I<%=data.plural%>MasterDetailsView


        Sub LoadData(Id As Integer)

        Event Loading As EventHandler(Of EventArgs)
        Property IsLoading As Boolean

        Property <%=data.plural%> As List(Of <%=data.plural%>ViewModel)



    End Interface
End Namespace