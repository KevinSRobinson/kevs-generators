
Imports QLoad.BusinesssObjects.Classes
Imports QLoad.BusinesssObjects.Common
Imports QLoad.BusinesssObjects.Repos

Namespace CRM.Contacts.MasterDetails
    Public Interface IContactsMasterDetailsView
        Sub LoadData(enquiry As EnquiryDto)
        Event ViewLoad As EventHandler(Of EventArgs)
    End Interface
End Namespace