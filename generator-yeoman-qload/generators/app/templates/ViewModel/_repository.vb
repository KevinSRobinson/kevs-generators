
Imports DevExpress.Data.Filtering
Imports DevExpress.Xpo
Imports Qload.BusinessObjects.Classes


Namespace Repos
    Public Interface I<%=data.plural%>Repo
        Function GetById(customerId As Integer)  As  <%=data.viewModelName%>
        Sub GetAll()  As IEnumerable(Of <%=data.viewModelName%>)

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
        

        Public Function GetById(id As Integer) As <%=data.viewModelName%> Implements I<%= data.name %>Repo.GetById

            Dim <%= data.camelCase %>  As <%= data.name %>  = MyBase.UnitOfWork.GetObjectByKey(Of  <%= data.name %>)(id)

            Return New <%=data.viewModelName%>() With
                {
                    <%= data.GetViewModelFieldMappings() %>               
                }


        End Function

        Private Function GetAll() As IEnumerable(Of <%=data.viewModelName%>) Implements I<%=data.plural%>Repo.GetAll

            Dim <%= data.camelCase %> As IEnumerable(Of <%=data.viewModelName%>)

            Try
                <%= data.camelCase %> = MyBase.UnitOfWork.GetObjectsFromSproc(Of <%=data.viewModelName%>)("p_fp_GetCRM<%=data.plural%>ListByCustomerId", New OperandValue(customerId))

            Catch ex As InvalidCastException
                Throw New Exception("Failed to Load <%=data.plural%>", ex)
            Catch ex As Exception
                Throw New Exception("Failed to Load <%=data.plural%>", ex)
            End Try

            Return <%= data.camelCase %>

        End Function



#End Region


#Region "Commands"


        Public Sub CreateUpdate<%=data.name%>(<%=data.viewModelName%> As <%=data.viewModelName%>) Implements I<%=data.plural%>Repo.CreateUpdate<%=data.viewModelName%>

            Dim <%= data.camelCase %> As <%= data.name %> = UnitOfWork.GetObjectByKey(Of <%= data.name %>)(<%=data.viewModelName%>.Id)

            If IsNothing( <%=data.camelCase%> ) Then
                <%=data.camelCase%> = New  <%=data.name%> (MyBase.UnitOfWork)
            End If

            With  <%=data.camelCase%> 
                 <%= data.GetObjectToViewModelFieldMappings() %>       
                .Save()
            End With

            MyBase.UnitOfWork.CommitChanges()

        End Sub


#End Region




    End Class
End Namespace