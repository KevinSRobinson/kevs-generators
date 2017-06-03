<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class ucEdit<%=data.model.title%>
    Inherits DevExpress.XtraEditors.XtraUserControl

    'UserControl overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        If disposing AndAlso components IsNot Nothing Then
            components.Dispose()
        End If
        MyBase.Dispose(disposing)
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.LayoutControl1 = New DevExpress.XtraLayout.LayoutControl()
        Me.LayoutControlGroup1 = New DevExpress.XtraLayout.LayoutControlGroup()
        
        

         <%for (var key in data.model.properties) {  %>
            Me.te<%= key %> = New DevExpress.XtraEditors.TextEdit()
             Me.lc<%= key %> = New DevExpress.XtraLayout.LayoutControlItem()
        <% } %>


     

        CType(Me.LayoutControl1, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.LayoutControl1.SuspendLayout()
        CType(Me.LayoutControlGroup1, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.teFirstName.Properties, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.lcFirstName, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.lcLastName, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.teLastName.Properties, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'LayoutControl1
        '
        Me.LayoutControl1.Controls.Add(Me.teLastName)
        Me.LayoutControl1.Controls.Add(Me.teFirstName)
        Me.LayoutControl1.Dock = System.Windows.Forms.DockStyle.Fill
        Me.LayoutControl1.Location = New System.Drawing.Point(0, 0)
        Me.LayoutControl1.Name = "LayoutControl1"
        Me.LayoutControl1.Root = Me.LayoutControlGroup1
        Me.LayoutControl1.Size = New System.Drawing.Size(251, 111)
        Me.LayoutControl1.TabIndex = 0
        Me.LayoutControl1.Text = "LayoutControl1"
        '
        'LayoutControlGroup1
        '
        Me.LayoutControlGroup1.EnableIndentsWithoutBorders = DevExpress.Utils.DefaultBoolean.[True]
        Me.LayoutControlGroup1.GroupBordersVisible = False
        Me.LayoutControlGroup1.Items.AddRange(New DevExpress.XtraLayout.BaseLayoutItem() {Me.lcFirstName, Me.lcLastName})
        Me.LayoutControlGroup1.Location = New System.Drawing.Point(0, 0)
        Me.LayoutControlGroup1.Name = "LayoutControlGroup1"
        Me.LayoutControlGroup1.Size = New System.Drawing.Size(251, 111)
        Me.LayoutControlGroup1.TextVisible = False
        '
        'teFirstName
        '
        Me.teFirstName.Location = New System.Drawing.Point(67, 12)
        Me.teFirstName.Name = "teFirstName"
        Me.teFirstName.Size = New System.Drawing.Size(172, 20)
        Me.teFirstName.StyleController = Me.LayoutControl1
        Me.teFirstName.TabIndex = 4
        '
        'lcFirstName
        '
        Me.lcFirstName.Control = Me.teFirstName
        Me.lcFirstName.Location = New System.Drawing.Point(0, 0)
        Me.lcFirstName.Name = "lcFirstName"
        Me.lcFirstName.Size = New System.Drawing.Size(231, 24)
        Me.lcFirstName.Text = "First Name"
        Me.lcFirstName.TextSize = New System.Drawing.Size(51, 13)
        '
        'lcLastName
        '
        Me.lcLastName.Control = Me.teLastName
        Me.lcLastName.Location = New System.Drawing.Point(0, 24)
        Me.lcLastName.Name = "lcLastName"
        Me.lcLastName.Size = New System.Drawing.Size(231, 67)
        Me.lcLastName.Text = "Last Name"
        Me.lcLastName.TextSize = New System.Drawing.Size(51, 13)
        '
        'teLastName
        '
        Me.teLastName.Location = New System.Drawing.Point(67, 36)
        Me.teLastName.Name = "teLastName"
        Me.teLastName.Size = New System.Drawing.Size(172, 20)
        Me.teLastName.StyleController = Me.LayoutControl1
        Me.teLastName.TabIndex = 5
        '
        'XtraUserControl1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.Controls.Add(Me.LayoutControl1)
        Me.Name = "XtraUserControl1"
        Me.Size = New System.Drawing.Size(251, 111)
        CType(Me.LayoutControl1, System.ComponentModel.ISupportInitialize).EndInit()
        Me.LayoutControl1.ResumeLayout(False)
        CType(Me.LayoutControlGroup1, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.teFirstName.Properties, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.lcFirstName, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.lcLastName, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.teLastName.Properties, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)

    End Sub

    Friend WithEvents LayoutControl1 As DevExpress.XtraLayout.LayoutControl
    Friend WithEvents LayoutControlGroup1 As DevExpress.XtraLayout.LayoutControlGroup
    Friend WithEvents teLastName As DevExpress.XtraEditors.TextEdit
    Friend WithEvents teFirstName As DevExpress.XtraEditors.TextEdit
    Friend WithEvents lcFirstName As DevExpress.XtraLayout.LayoutControlItem
    Friend WithEvents lcLastName As DevExpress.XtraLayout.LayoutControlItem
End Class
