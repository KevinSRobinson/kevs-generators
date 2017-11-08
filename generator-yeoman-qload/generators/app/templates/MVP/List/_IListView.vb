Imports System.Collections.Generic
Imports Qload.Data

Namespace CRM.<%=data.plural%>.List
    Public Interface I<%=data.plural%>ListView

        Event Add As EventHandler(Of EventArgs)

        Event SelectionChanged As EventHandler(Of EventArgs(of <%=data.name%>ViewModel))

        Property <%=data.plural%> As List(Of <%=data.name%>ViewModel)

        Property Loading As Boolean        

        Sub Load<%=data.plural%>ByCompanyId(companyId As Integer)

    End Interface
End Namespace