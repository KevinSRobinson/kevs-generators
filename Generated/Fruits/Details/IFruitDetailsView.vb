Imports QLoad.BusinesssObjects.Classes
Imports Qload.BusinesssObjects.Common

Namespace CRM.Contacts.Details
    ''' <summary>
    '''     Readonly Contacts View
    ''' </summary>
    Public Interface IContactDetailsView

        WriteOnly Property Contact As Contact
    End Interface
End Namespace