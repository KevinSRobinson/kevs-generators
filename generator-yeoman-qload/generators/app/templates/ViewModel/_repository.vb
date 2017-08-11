
Imports DevExpress.Data.Filtering
Imports DevExpress.Xpo
Imports Qload.BusinessObjects.Classes


Namespace Repos
    Public Interface I<%=data.plural%>Repo
        Function Get<%=data.plural%>ByCustomerId(customerId As Integer) As IEnumerable(Of <%=data.viewModelName%>)


    End Interface


    <CLSCompliant(False)>
    Public Class <%=data.plural%>Repo
        Inherits BaseManager
        Implements I<%=data.plural%>Repo

#Region "Constructors"

        Public Sub New(unitOfWork As UnitOfWork)
            MyBase.UnitOfWork = unitOfWork
        End Sub

#End Region


#Region "Queries"

        Private Function Get<%=data.plural%>ByCustomerId(customerId As Integer) As IEnumerable(Of <%=data.viewModelName%>) Implements <%=data.interface%>.Get<%=data.plural%>ByCustomerId

            Dim enquiry As IEnumerable(Of <%=data.viewModelName%>)

            Try
                enquiry = MyBase.UnitOfWork.GetObjectsFromSproc(Of <%=data.viewModelName%>)("p_fp_GetCRM<%=data.plural%>ListByCustomerId", New OperandValue(customerId))

            Catch ex As InvalidCastException
                Throw New Exception("Failed to Load <%=data.plural%>", ex)
            Catch ex As Exception
                Throw New Exception("Failed to Load <%=data.plural%>", ex)
            End Try

            Return enquiry

        End Function

#End Region





    End Class
End Namespace