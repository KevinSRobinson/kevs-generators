Imports Qload.Data
Imports Qload.Data.Repos.ViewModels
    ''' <summary>
    '''     Readonly  <%= data.name %> View
    ''' </summary>
    Public Interface <%= data.interfaceName %>

         Property <%= data.name %> As <%= data.viewModelName %>

         ReadOnly Property IsValid As Boolean
    End Interface

