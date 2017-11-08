Namespace CRM.<%=data.plural%>.Add
    <Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
    Partial Class FrmEdit<%=data.name%>
        Inherits System.Windows.Forms.Form

        'Form overrides dispose to clean up the component list.
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
            Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(FrmEdit<%=data.name%>))
            Me.btnClose = New DevExpress.XtraEditors.SimpleButton()
            Me.LayoutControl1 = New DevExpress.XtraLayout.LayoutControl()
            Me.LayoutControlGroup1 = New DevExpress.XtraLayout.LayoutControlGroup()
            Me.pc<%=data.name%> = New DevExpress.XtraEditors.PanelControl()
            Me.LayoutControlItem1 = New DevExpress.XtraLayout.LayoutControlItem()
            Me.sbOK = New DevExpress.XtraEditors.SimpleButton()
            Me.LayoutControlItem2 = New DevExpress.XtraLayout.LayoutControlItem()
            Me.sbCancel = New DevExpress.XtraEditors.SimpleButton()
            Me.LayoutControlItem3 = New DevExpress.XtraLayout.LayoutControlItem()
            CType(Me.LayoutControl1, System.ComponentModel.ISupportInitialize).BeginInit()
            Me.LayoutControl1.SuspendLayout()
            CType(Me.LayoutControlGroup1, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.pc<%=data.name%>, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.LayoutControlItem1, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.LayoutControlItem2, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.LayoutControlItem3, System.ComponentModel.ISupportInitialize).BeginInit()
            Me.SuspendLayout()
            '
            'btnClose
            '
            Me.btnClose.Location = New System.Drawing.Point(12, 38)
            Me.btnClose.Name = "btnClose"
            Me.btnClose.Size = New System.Drawing.Size(332, 22)
            Me.btnClose.TabIndex = 3
            Me.btnClose.Text = "Close"
            '
            'LayoutControl1
            '
            Me.LayoutControl1.Controls.Add(Me.sbCancel)
            Me.LayoutControl1.Controls.Add(Me.sbOK)
            Me.LayoutControl1.Controls.Add(Me.pc<%=data.name%>)
            Me.LayoutControl1.Dock = System.Windows.Forms.DockStyle.Fill
            Me.LayoutControl1.Location = New System.Drawing.Point(0, 0)
            Me.LayoutControl1.Name = "LayoutControl1"
            Me.LayoutControl1.Root = Me.LayoutControlGroup1
            Me.LayoutControl1.Size = New System.Drawing.Size(764, 469)
            Me.LayoutControl1.TabIndex = 4
            Me.LayoutControl1.Text = "LayoutControl1"
            '
            'LayoutControlGroup1
            '
            Me.LayoutControlGroup1.EnableIndentsWithoutBorders = DevExpress.Utils.DefaultBoolean.[True]
            Me.LayoutControlGroup1.GroupBordersVisible = False
            Me.LayoutControlGroup1.Items.AddRange(New DevExpress.XtraLayout.BaseLayoutItem() {Me.LayoutControlItem1, Me.LayoutControlItem2, Me.LayoutControlItem3})
            Me.LayoutControlGroup1.Location = New System.Drawing.Point(0, 0)
            Me.LayoutControlGroup1.Name = "LayoutControlGroup1"
            Me.LayoutControlGroup1.Size = New System.Drawing.Size(764, 469)
            Me.LayoutControlGroup1.TextVisible = False
            '
            'pc<%=data.name%>
            '
            Me.pc<%=data.name%>.Location = New System.Drawing.Point(12, 12)
            Me.pc<%=data.name%>.Name = "pc<%=data.name%>"
            Me.pc<%=data.name%>.Size = New System.Drawing.Size(740, 419)
            Me.pc<%=data.name%>.TabIndex = 4
            '
            'LayoutControlItem1
            '
            Me.LayoutControlItem1.Control = Me.pc<%=data.name%>
            Me.LayoutControlItem1.Location = New System.Drawing.Point(0, 0)
            Me.LayoutControlItem1.Name = "LayoutControlItem1"
            Me.LayoutControlItem1.Size = New System.Drawing.Size(744, 423)
            Me.LayoutControlItem1.TextSize = New System.Drawing.Size(0, 0)
            Me.LayoutControlItem1.TextVisible = False
            '
            'sbOK
            '
            Me.sbOK.Location = New System.Drawing.Point(12, 435)
            Me.sbOK.Name = "sbOK"
            Me.sbOK.Size = New System.Drawing.Size(368, 22)
            Me.sbOK.StyleController = Me.LayoutControl1
            Me.sbOK.TabIndex = 5
            Me.sbOK.Text = "Save"
            '
            'LayoutControlItem2
            '
            Me.LayoutControlItem2.Control = Me.sbOK
            Me.LayoutControlItem2.Location = New System.Drawing.Point(0, 423)
            Me.LayoutControlItem2.Name = "LayoutControlItem2"
            Me.LayoutControlItem2.Size = New System.Drawing.Size(372, 26)
            Me.LayoutControlItem2.TextSize = New System.Drawing.Size(0, 0)
            Me.LayoutControlItem2.TextVisible = False
            '
            'sbCancel
            '
            Me.sbCancel.Location = New System.Drawing.Point(384, 435)
            Me.sbCancel.Name = "sbCancel"
            Me.sbCancel.Size = New System.Drawing.Size(368, 22)
            Me.sbCancel.StyleController = Me.LayoutControl1
            Me.sbCancel.TabIndex = 6
            Me.sbCancel.Text = "Cancel"
            '
            'LayoutControlItem3
            '
            Me.LayoutControlItem3.Control = Me.sbCancel
            Me.LayoutControlItem3.Location = New System.Drawing.Point(372, 423)
            Me.LayoutControlItem3.Name = "LayoutControlItem3"
            Me.LayoutControlItem3.Size = New System.Drawing.Size(372, 26)
            Me.LayoutControlItem3.TextSize = New System.Drawing.Size(0, 0)
            Me.LayoutControlItem3.TextVisible = False
            '
            'FrmEdit<%=data.name%>
            '
            Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
            Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
            Me.ClientSize = New System.Drawing.Size(764, 469)
            Me.Controls.Add(Me.LayoutControl1)
            Me.Controls.Add(Me.btnClose)
            Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
            Me.Name = "FrmEdit<%=data.name%>"
            Me.Text = "FrmEdit<%=data.name%>"
            CType(Me.LayoutControl1, System.ComponentModel.ISupportInitialize).EndInit()
            Me.LayoutControl1.ResumeLayout(False)
            CType(Me.LayoutControlGroup1, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.pc<%=data.name%>, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.LayoutControlItem1, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.LayoutControlItem2, System.ComponentModel.ISupportInitialize).EndInit()
            CType(Me.LayoutControlItem3, System.ComponentModel.ISupportInitialize).EndInit()
            Me.ResumeLayout(False)

        End Sub

        Friend WithEvents btnClose As DevExpress.XtraEditors.SimpleButton
        Friend WithEvents LayoutControl1 As DevExpress.XtraLayout.LayoutControl
        Friend WithEvents LayoutControlGroup1 As DevExpress.XtraLayout.LayoutControlGroup
        Friend WithEvents sbCancel As DevExpress.XtraEditors.SimpleButton
        Friend WithEvents sbOK As DevExpress.XtraEditors.SimpleButton
        Friend WithEvents pc<%=data.name%> As DevExpress.XtraEditors.PanelControl
        Friend WithEvents LayoutControlItem1 As DevExpress.XtraLayout.LayoutControlItem
        Friend WithEvents LayoutControlItem2 As DevExpress.XtraLayout.LayoutControlItem
        Friend WithEvents LayoutControlItem3 As DevExpress.XtraLayout.LayoutControlItem
    End Class
End Namespace