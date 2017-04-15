

Namespace CRM.Contacts.MasterDetails

    <Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
    Partial Class UcContactsMasterDetails
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
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(UcContactsMasterDetails))
        Me.GroupControl1 = New DevExpress.XtraEditors.GroupControl()
        Me.LayoutControl1 = New DevExpress.XtraLayout.LayoutControl()
        Me.LayoutControl2 = New DevExpress.XtraLayout.LayoutControl()
            Me.GroupControl2 = New DevExpress.XtraEditors.GroupControl()
            Me.grpDetails = New DevExpress.XtraEditors.GroupControl()
            Me.grpList = New DevExpress.XtraEditors.GroupControl()
            Me.Root = New DevExpress.XtraLayout.LayoutControlGroup()
            Me.LayoutControlItem2 = New DevExpress.XtraLayout.LayoutControlItem()
            Me.LayoutControlItem3 = New DevExpress.XtraLayout.LayoutControlItem()
            Me.LayoutControlItem4 = New DevExpress.XtraLayout.LayoutControlItem()
            Me.LayoutControlGroup1 = New DevExpress.XtraLayout.LayoutControlGroup()
            Me.SimpleSeparator1 = New DevExpress.XtraLayout.SimpleSeparator()
            Me.LayoutControlItem1 = New DevExpress.XtraLayout.LayoutControlItem()
            CType(Me.GroupControl1, System.ComponentModel.ISupportInitialize).BeginInit()
            Me.GroupControl1.SuspendLayout()
            CType(Me.LayoutControl1, System.ComponentModel.ISupportInitialize).BeginInit()
            Me.LayoutControl1.SuspendLayout()
            CType(Me.LayoutControl2, System.ComponentModel.ISupportInitialize).BeginInit()
            Me.LayoutControl2.SuspendLayout()
            CType(Me.GroupControl2, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.grpDetails, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.grpList, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.Root, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.LayoutControlItem2, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.LayoutControlItem3, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.LayoutControlItem4, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.LayoutControlGroup1, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.SimpleSeparator1, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.LayoutControlItem1, System.ComponentModel.ISupportInitialize).BeginInit()
            Me.SuspendLayout()
            '
            'GroupControl1
            '
            Me.GroupControl1.CaptionImage = CType(resources.GetObject("GroupControl1.CaptionImage"), System.Drawing.Image)
            Me.GroupControl1.Controls.Add(Me.LayoutControl1)
            Me.GroupControl1.Dock = System.Windows.Forms.DockStyle.Fill
            Me.GroupControl1.Location = New System.Drawing.Point(0, 0)
            Me.GroupControl1.Name = "GroupControl1"
            Me.GroupControl1.Size = New System.Drawing.Size(1294, 451)
            Me.GroupControl1.TabIndex = 0
            Me.GroupControl1.Text = "Contacts"
            '
            'LayoutControl1
            '
            Me.LayoutControl1.Controls.Add(Me.LayoutControl2)
            Me.LayoutControl1.Dock = System.Windows.Forms.DockStyle.Fill
            Me.LayoutControl1.Location = New System.Drawing.Point(2, 39)
            Me.LayoutControl1.Name = "LayoutControl1"
            Me.LayoutControl1.OptionsCustomizationForm.DesignTimeCustomizationFormPositionAndSize = New System.Drawing.Rectangle(-1290, 366, 485, 350)
            Me.LayoutControl1.Root = Me.LayoutControlGroup1
            Me.LayoutControl1.Size = New System.Drawing.Size(1290, 410)
            Me.LayoutControl1.TabIndex = 0
            Me.LayoutControl1.Text = "LayoutControl1"
            '
            'LayoutControl2
            '
            Me.LayoutControl2.Controls.Add(Me.GroupControl2)
            Me.LayoutControl2.Controls.Add(Me.grpDetails)
            Me.LayoutControl2.Controls.Add(Me.grpList)
            Me.LayoutControl2.Location = New System.Drawing.Point(12, 12)
            Me.LayoutControl2.Name = "LayoutControl2"
            Me.LayoutControl2.OptionsCustomizationForm.DesignTimeCustomizationFormPositionAndSize = New System.Drawing.Rectangle(-1591, 521, 250, 350)
            Me.LayoutControl2.Root = Me.Root
            Me.LayoutControl2.Size = New System.Drawing.Size(1266, 384)
            Me.LayoutControl2.TabIndex = 4
            Me.LayoutControl2.Text = "LayoutControl2"
            '
            'GroupControl2
            '
            Me.GroupControl2.Location = New System.Drawing.Point(12, 12)
            Me.GroupControl2.Name = "GroupControl2"
            Me.GroupControl2.Size = New System.Drawing.Size(1, 360)
            Me.GroupControl2.TabIndex = 0
            Me.GroupControl2.Text = "Primary Contact"
            '
            'grpDetails
            '
            Me.grpDetails.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink
            Me.grpDetails.Location = New System.Drawing.Point(923, 12)
            Me.grpDetails.Name = "grpDetails"
            Me.grpDetails.Size = New System.Drawing.Size(331, 360)
            Me.grpDetails.TabIndex = 0
            Me.grpDetails.Text = "Contact Details"
            '
            'grpList
            '
            Me.grpList.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink
            Me.grpList.Location = New System.Drawing.Point(17, 12)
            Me.grpList.Name = "grpList"
            Me.grpList.Size = New System.Drawing.Size(902, 360)
            Me.grpList.TabIndex = 4
            Me.grpList.Text = "Contacts"
            '
            'Root
            '
            Me.Root.EnableIndentsWithoutBorders = DevExpress.Utils.DefaultBoolean.[True]
            Me.Root.GroupBordersVisible = False
            Me.Root.Items.AddRange(New DevExpress.XtraLayout.BaseLayoutItem() {Me.LayoutControlItem2, Me.LayoutControlItem3, Me.LayoutControlItem4})
            Me.Root.Location = New System.Drawing.Point(0, 0)
            Me.Root.Name = "Root"
            Me.Root.Size = New System.Drawing.Size(1266, 384)
            Me.Root.TextVisible = False
            '
            'LayoutControlItem2
            '
            Me.LayoutControlItem2.Control = Me.grpList
            Me.LayoutControlItem2.Location = New System.Drawing.Point(5, 0)
            Me.LayoutControlItem2.Name = "LayoutControlItem2"
            Me.LayoutControlItem2.Size = New System.Drawing.Size(906, 364)
            Me.LayoutControlItem2.TextSize = New System.Drawing.Size(0, 0)
            Me.LayoutControlItem2.TextVisible = False
            '
            'LayoutControlItem3
            '
            Me.LayoutControlItem3.Control = Me.grpDetails
            Me.LayoutControlItem3.Location = New System.Drawing.Point(911, 0)
            Me.LayoutControlItem3.Name = "LayoutControlItem3"
            Me.LayoutControlItem3.Size = New System.Drawing.Size(335, 364)
            Me.LayoutControlItem3.TextSize = New System.Drawing.Size(0, 0)
            Me.LayoutControlItem3.TextVisible = False
            '
            'LayoutControlItem4
            '
            Me.LayoutControlItem4.Control = Me.GroupControl2
            Me.LayoutControlItem4.Location = New System.Drawing.Point(0, 0)
            Me.LayoutControlItem4.Name = "LayoutControlItem4"
            Me.LayoutControlItem4.Size = New System.Drawing.Size(5, 364)
            Me.LayoutControlItem4.TextSize = New System.Drawing.Size(0, 0)
            Me.LayoutControlItem4.TextVisible = False
            '
            'LayoutControlGroup1
            '
            Me.LayoutControlGroup1.EnableIndentsWithoutBorders = DevExpress.Utils.DefaultBoolean.[True]
            Me.LayoutControlGroup1.GroupBordersVisible = False
            Me.LayoutControlGroup1.Items.AddRange(New DevExpress.XtraLayout.BaseLayoutItem() {Me.SimpleSeparator1, Me.LayoutControlItem1})
            Me.LayoutControlGroup1.Location = New System.Drawing.Point(0, 0)
            Me.LayoutControlGroup1.Name = "Root"
            Me.LayoutControlGroup1.Size = New System.Drawing.Size(1290, 410)
            Me.LayoutControlGroup1.TextVisible = False
            '
            'SimpleSeparator1
            '
            Me.SimpleSeparator1.AllowHotTrack = False
            Me.SimpleSeparator1.Location = New System.Drawing.Point(0, 388)
            Me.SimpleSeparator1.Name = "SimpleSeparator1"
            Me.SimpleSeparator1.Size = New System.Drawing.Size(1270, 2)
            '
            'LayoutControlItem1
            '
            Me.LayoutControlItem1.Control = Me.LayoutControl2
            Me.LayoutControlItem1.Location = New System.Drawing.Point(0, 0)
            Me.LayoutControlItem1.Name = "LayoutControlItem1"
            Me.LayoutControlItem1.Size = New System.Drawing.Size(1270, 388)
            Me.LayoutControlItem1.TextSize = New System.Drawing.Size(0, 0)
            Me.LayoutControlItem1.TextVisible = False
            '
            'UcContactsMasterDetails
            '
            Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
            Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
            Me.Controls.Add(Me.GroupControl1)
            Me.Name = "UcContactsMasterDetails"
            Me.Size = New System.Drawing.Size(1294, 451)
            CType(Me.GroupControl1, System.ComponentModel.ISupportInitialize).EndInit()
            Me.GroupControl1.ResumeLayout(False)
            CType(Me.LayoutControl1, System.ComponentModel.ISupportInitialize).EndInit()
            Me.LayoutControl1.ResumeLayout(False)
            CType(Me.LayoutControl2, System.ComponentModel.ISupportInitialize).EndInit()
            Me.LayoutControl2.ResumeLayout(False)
            CType(Me.GroupControl2, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.grpDetails, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.grpList, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.Root, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.LayoutControlItem2, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.LayoutControlItem3, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.LayoutControlItem4, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.LayoutControlGroup1, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.SimpleSeparator1, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.LayoutControlItem1, System.ComponentModel.ISupportInitialize).EndInit()
            Me.ResumeLayout(False)

        End Sub

        Friend WithEvents GroupControl1 As DevExpress.XtraEditors.GroupControl
        Friend WithEvents LayoutControl1 As DevExpress.XtraLayout.LayoutControl
        Friend WithEvents LayoutControlGroup1 As DevExpress.XtraLayout.LayoutControlGroup
        Friend WithEvents SimpleSeparator1 As DevExpress.XtraLayout.SimpleSeparator
        Friend WithEvents LayoutControl2 As DevExpress.XtraLayout.LayoutControl
        Friend WithEvents grpDetails As DevExpress.XtraEditors.GroupControl
        Friend WithEvents grpList As DevExpress.XtraEditors.GroupControl
        Friend WithEvents Root As DevExpress.XtraLayout.LayoutControlGroup
        Friend WithEvents LayoutControlItem2 As DevExpress.XtraLayout.LayoutControlItem
        Friend WithEvents LayoutControlItem1 As DevExpress.XtraLayout.LayoutControlItem
        Friend WithEvents LayoutControlItem3 As DevExpress.XtraLayout.LayoutControlItem
        Friend WithEvents GroupControl2 As DevExpress.XtraEditors.GroupControl
        Friend WithEvents LayoutControlItem4 As DevExpress.XtraLayout.LayoutControlItem
    End Class
End Namespace