Namespace CRM.Contacts.Details
    <Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
    Partial Class UcContactDetailsView
        Inherits System.Windows.Forms.UserControl

        'UserControl overrides dispose to clean up the component list.
        <System.Diagnostics.DebuggerNonUserCode()>
        Protected Overrides Sub Dispose(ByVal disposing As Boolean)
            Try
                If disposing AndAlso components IsNot Nothing Then
                    components.Dispose()
                End If
            Finally
                MyBase.Dispose(disposing)
            End Try
        End Sub

        'Required by the Windows Form Designer
        Private components As System.ComponentModel.IContainer

        'NOTE: The following procedure is required by the Windows Form Designer
        'It can be modified using the Windows Form Designer.  
        'Do not modify it using the code editor.
        <System.Diagnostics.DebuggerStepThrough()>
        Private Sub InitializeComponent()
            Me.grpContact = New DevExpress.XtraEditors.GroupControl()
            Me.LayoutControl1 = New DevExpress.XtraLayout.LayoutControl()
            Me.LayoutControlGroup1 = New DevExpress.XtraLayout.LayoutControlGroup()
            Me.lblName = New DevExpress.XtraEditors.LabelControl()
            Me.LayoutControlItem1 = New DevExpress.XtraLayout.LayoutControlItem()
            Me.lblCustomerEnduser = New DevExpress.XtraEditors.LabelControl()
            Me.LayoutControlItem2 = New DevExpress.XtraLayout.LayoutControlItem()
            Me.lblBranch = New DevExpress.XtraEditors.LabelControl()
            Me.LayoutControlItem3 = New DevExpress.XtraLayout.LayoutControlItem()
            Me.lblBusinessPhone = New DevExpress.XtraEditors.LabelControl()
            Me.LayoutControlItem4 = New DevExpress.XtraLayout.LayoutControlItem()
            Me.lblMobile = New DevExpress.XtraEditors.LabelControl()
            Me.LayoutControlItem5 = New DevExpress.XtraLayout.LayoutControlItem()
            Me.lblEmail = New DevExpress.XtraEditors.HyperlinkLabelControl()
            Me.Email = New DevExpress.XtraLayout.LayoutControlItem()
            CType(Me.grpContact, System.ComponentModel.ISupportInitialize).BeginInit()
            Me.grpContact.SuspendLayout()
            CType(Me.LayoutControl1, System.ComponentModel.ISupportInitialize).BeginInit()
            Me.LayoutControl1.SuspendLayout()
            CType(Me.LayoutControlGroup1, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.LayoutControlItem1, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.LayoutControlItem2, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.LayoutControlItem3, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.LayoutControlItem4, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.LayoutControlItem5, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.Email, System.ComponentModel.ISupportInitialize).BeginInit()
            Me.SuspendLayout()
            '
            'grpContact
            '
            Me.grpContact.Controls.Add(Me.LayoutControl1)
            Me.grpContact.Dock = System.Windows.Forms.DockStyle.Fill
            Me.grpContact.Location = New System.Drawing.Point(0, 0)
            Me.grpContact.Name = "grpContact"
            Me.grpContact.Size = New System.Drawing.Size(292, 155)
            Me.grpContact.TabIndex = 0
            Me.grpContact.Text = "Contact Details"
            '
            'LayoutControl1
            '
            Me.LayoutControl1.Controls.Add(Me.lblEmail)
            Me.LayoutControl1.Controls.Add(Me.lblName)
            Me.LayoutControl1.Controls.Add(Me.lblCustomerEnduser)
            Me.LayoutControl1.Controls.Add(Me.lblBranch)
            Me.LayoutControl1.Controls.Add(Me.lblBusinessPhone)
            Me.LayoutControl1.Controls.Add(Me.lblMobile)
            Me.LayoutControl1.Dock = System.Windows.Forms.DockStyle.Fill
            Me.LayoutControl1.Location = New System.Drawing.Point(2, 20)
            Me.LayoutControl1.Name = "LayoutControl1"
            Me.LayoutControl1.Root = Me.LayoutControlGroup1
            Me.LayoutControl1.Size = New System.Drawing.Size(288, 133)
            Me.LayoutControl1.TabIndex = 0
            Me.LayoutControl1.Text = "LayoutControl1"
            '
            'LayoutControlGroup1
            '
            Me.LayoutControlGroup1.EnableIndentsWithoutBorders = DevExpress.Utils.DefaultBoolean.[True]
            Me.LayoutControlGroup1.GroupBordersVisible = False
            Me.LayoutControlGroup1.Items.AddRange(New DevExpress.XtraLayout.BaseLayoutItem() {Me.LayoutControlItem1, Me.LayoutControlItem2, Me.LayoutControlItem3, Me.LayoutControlItem4, Me.LayoutControlItem5, Me.Email})
            Me.LayoutControlGroup1.Location = New System.Drawing.Point(0, 0)
            Me.LayoutControlGroup1.Name = "Root"
            Me.LayoutControlGroup1.Size = New System.Drawing.Size(288, 133)
            Me.LayoutControlGroup1.TextVisible = False
            '
            'lblName
            '
            Me.lblName.Location = New System.Drawing.Point(106, 12)
            Me.lblName.Name = "lblName"
            Me.lblName.Size = New System.Drawing.Size(170, 13)
            Me.lblName.StyleController = Me.LayoutControl1
            Me.lblName.TabIndex = 4
            '
            'LayoutControlItem1
            '
            Me.LayoutControlItem1.Control = Me.lblName
            Me.LayoutControlItem1.Location = New System.Drawing.Point(0, 0)
            Me.LayoutControlItem1.Name = "LayoutControlItem1"
            Me.LayoutControlItem1.Size = New System.Drawing.Size(268, 17)
            Me.LayoutControlItem1.Text = "Name"
            Me.LayoutControlItem1.TextSize = New System.Drawing.Size(90, 13)
            '
            'lblCustomerEnduser
            '
            Me.lblCustomerEnduser.Location = New System.Drawing.Point(106, 29)
            Me.lblCustomerEnduser.Name = "lblCustomerEnduser"
            Me.lblCustomerEnduser.Size = New System.Drawing.Size(170, 13)
            Me.lblCustomerEnduser.StyleController = Me.LayoutControl1
            Me.lblCustomerEnduser.TabIndex = 4
            '
            'LayoutControlItem2
            '
            Me.LayoutControlItem2.Control = Me.lblCustomerEnduser
            Me.LayoutControlItem2.CustomizationFormText = "Name"
            Me.LayoutControlItem2.Location = New System.Drawing.Point(0, 17)
            Me.LayoutControlItem2.Name = "LayoutControlItem2"
            Me.LayoutControlItem2.Size = New System.Drawing.Size(268, 17)
            Me.LayoutControlItem2.Text = "Customer/EndUser"
            Me.LayoutControlItem2.TextSize = New System.Drawing.Size(90, 13)
            '
            'lblBranch
            '
            Me.lblBranch.Location = New System.Drawing.Point(106, 46)
            Me.lblBranch.Name = "lblBranch"
            Me.lblBranch.Size = New System.Drawing.Size(170, 13)
            Me.lblBranch.StyleController = Me.LayoutControl1
            Me.lblBranch.TabIndex = 4
            '
            'LayoutControlItem3
            '
            Me.LayoutControlItem3.Control = Me.lblBranch
            Me.LayoutControlItem3.CustomizationFormText = "Name"
            Me.LayoutControlItem3.Location = New System.Drawing.Point(0, 34)
            Me.LayoutControlItem3.Name = "LayoutControlItem3"
            Me.LayoutControlItem3.Size = New System.Drawing.Size(268, 17)
            Me.LayoutControlItem3.Text = "Branch"
            Me.LayoutControlItem3.TextSize = New System.Drawing.Size(90, 13)
            '
            'lblBusinessPhone
            '
            Me.lblBusinessPhone.Location = New System.Drawing.Point(106, 63)
            Me.lblBusinessPhone.Name = "lblBusinessPhone"
            Me.lblBusinessPhone.Size = New System.Drawing.Size(170, 13)
            Me.lblBusinessPhone.StyleController = Me.LayoutControl1
            Me.lblBusinessPhone.TabIndex = 4
            '
            'LayoutControlItem4
            '
            Me.LayoutControlItem4.Control = Me.lblBusinessPhone
            Me.LayoutControlItem4.CustomizationFormText = "Name"
            Me.LayoutControlItem4.Location = New System.Drawing.Point(0, 51)
            Me.LayoutControlItem4.Name = "LayoutControlItem4"
            Me.LayoutControlItem4.Size = New System.Drawing.Size(268, 17)
            Me.LayoutControlItem4.Text = "Business Phone"
            Me.LayoutControlItem4.TextSize = New System.Drawing.Size(90, 13)
            '
            'lblMobile
            '
            Me.lblMobile.Location = New System.Drawing.Point(106, 80)
            Me.lblMobile.Name = "lblMobile"
            Me.lblMobile.Size = New System.Drawing.Size(170, 13)
            Me.lblMobile.StyleController = Me.LayoutControl1
            Me.lblMobile.TabIndex = 4
            '
            'LayoutControlItem5
            '
            Me.LayoutControlItem5.Control = Me.lblMobile
            Me.LayoutControlItem5.CustomizationFormText = "Name"
            Me.LayoutControlItem5.Location = New System.Drawing.Point(0, 68)
            Me.LayoutControlItem5.Name = "LayoutControlItem5"
            Me.LayoutControlItem5.Size = New System.Drawing.Size(268, 17)
            Me.LayoutControlItem5.Text = "Mobile"
            Me.LayoutControlItem5.TextSize = New System.Drawing.Size(90, 13)
            '
            'lblEmail
            '
            Me.lblEmail.Cursor = System.Windows.Forms.Cursors.Hand
            Me.lblEmail.Location = New System.Drawing.Point(106, 97)
            Me.lblEmail.Name = "lblEmail"
            Me.lblEmail.Size = New System.Drawing.Size(170, 13)
            Me.lblEmail.StyleController = Me.LayoutControl1
            Me.lblEmail.TabIndex = 5
            '
            'Email
            '
            Me.Email.Control = Me.lblEmail
            Me.Email.Location = New System.Drawing.Point(0, 85)
            Me.Email.Name = "Email"
            Me.Email.Size = New System.Drawing.Size(268, 28)
            Me.Email.TextSize = New System.Drawing.Size(90, 13)
            '
            'UcContactDetailsView
            '
            Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
            Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
            Me.Controls.Add(Me.grpContact)
            Me.Name = "UcContactDetailsView"
            Me.Size = New System.Drawing.Size(292, 155)
            CType(Me.grpContact, System.ComponentModel.ISupportInitialize).EndInit()
            Me.grpContact.ResumeLayout(False)
            CType(Me.LayoutControl1, System.ComponentModel.ISupportInitialize).EndInit()
            Me.LayoutControl1.ResumeLayout(False)
            CType(Me.LayoutControlGroup1, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.LayoutControlItem1, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.LayoutControlItem2, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.LayoutControlItem3, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.LayoutControlItem4, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.LayoutControlItem5, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.Email, System.ComponentModel.ISupportInitialize).EndInit()
            Me.ResumeLayout(False)

        End Sub

        Friend WithEvents grpContact As DevExpress.XtraEditors.GroupControl
        Friend WithEvents LayoutControl1 As DevExpress.XtraLayout.LayoutControl
        Friend WithEvents lblName As DevExpress.XtraEditors.LabelControl
        Friend WithEvents LayoutControlGroup1 As DevExpress.XtraLayout.LayoutControlGroup
        Friend WithEvents LayoutControlItem1 As DevExpress.XtraLayout.LayoutControlItem
        Friend WithEvents lblCustomerEnduser As DevExpress.XtraEditors.LabelControl
        Friend WithEvents LayoutControlItem2 As DevExpress.XtraLayout.LayoutControlItem
        Friend WithEvents lblBranch As DevExpress.XtraEditors.LabelControl
        Friend WithEvents LayoutControlItem3 As DevExpress.XtraLayout.LayoutControlItem
        Friend WithEvents lblBusinessPhone As DevExpress.XtraEditors.LabelControl
        Friend WithEvents LayoutControlItem4 As DevExpress.XtraLayout.LayoutControlItem
        Private WithEvents lblEmail As DevExpress.XtraEditors.HyperlinkLabelControl
        Friend WithEvents lblMobile As DevExpress.XtraEditors.LabelControl
        Friend WithEvents LayoutControlItem5 As DevExpress.XtraLayout.LayoutControlItem
        Private WithEvents Email As DevExpress.XtraLayout.LayoutControlItem
    End Class
End Namespace