Imports QLoad.BusinesssObjects.Classes
Imports Qload.BusinesssObjects.Common
Imports QLoad.BusinesssObjects.Manager

Public Class uc<%=data.model.title%>Details
        'Implements IContactDetailsView

#Region "Constuctors"

        Public Sub New()
           ' resositoryManager As IRepositoryManager
            ' This call is required by the designer.
            InitializeComponent()

            Me.Dock = DockStyle.Fill
        End Sub

#End Region

#Region "Properties"

        ' Public WriteOnly Property Contact As Contact Implements IContactDetailsView.Contact
        '     Set
        '         Me.lblName.Text = Value.Name
        '         '' Me.lblCustomerEnduser.Text = value.Customer.Name
        '         '' Me.lblBranch.Text = value.Branch.Name
        '         Me.lblBusinessPhone.Text = Value.BusinessNumber
        '         Me.lblMobile.Text = Value.MobileNumber
        '         Me.lblEmail.Text = Value.EmailAddress
        '     End Set
        ' End Property


#End Region
    End Class