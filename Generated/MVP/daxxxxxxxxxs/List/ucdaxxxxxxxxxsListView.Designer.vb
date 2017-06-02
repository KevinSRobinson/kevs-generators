Namespace CRM.Contacts.List
    <Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
    Partial Class UcContactsListView
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
        Me.components = New System.ComponentModel.Container()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(UcContactsListView))
        Me.bmMenu = New DevExpress.XtraBars.BarManager(Me.components)
        Me.Bar2 = New DevExpress.XtraBars.Bar()
        Me.bbiAddContact = New DevExpress.XtraBars.BarButtonItem()
        Me.Bar3 = New DevExpress.XtraBars.Bar()
        Me.bsiCount = New DevExpress.XtraBars.BarStaticItem()
        Me.barDockControlTop = New DevExpress.XtraBars.BarDockControl()
        Me.barDockControlBottom = New DevExpress.XtraBars.BarDockControl()
        Me.barDockControlLeft = New DevExpress.XtraBars.BarDockControl()
        Me.barDockControlRight = New DevExpress.XtraBars.BarDockControl()
        Me.gcContacts = New DevExpress.XtraGrid.GridControl()
        Me.gvContacts = New DevExpress.XtraGrid.Views.Grid.GridView()
        Me.colContactId = New DevExpress.XtraGrid.Columns.GridColumn()
        Me.colFullName = New DevExpress.XtraGrid.Columns.GridColumn()
        Me.colBusinessNumber = New DevExpress.XtraGrid.Columns.GridColumn()
        Me.colMobileNumber = New DevExpress.XtraGrid.Columns.GridColumn()
        Me.colEmailAddress = New DevExpress.XtraGrid.Columns.GridColumn()
            Me.FirstName = New DevExpress.XtraGrid.Columns.GridColumn()
            CType(Me.bmMenu, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.gcContacts, System.ComponentModel.ISupportInitialize).BeginInit()
            CType(Me.gvContacts, System.ComponentModel.ISupportInitialize).BeginInit()
            Me.SuspendLayout()
            '
            'bmMenu
            '
            Me.bmMenu.Bars.AddRange(New DevExpress.XtraBars.Bar() {Me.Bar2, Me.Bar3})
            Me.bmMenu.DockControls.Add(Me.barDockControlTop)
            Me.bmMenu.DockControls.Add(Me.barDockControlBottom)
            Me.bmMenu.DockControls.Add(Me.barDockControlLeft)
            Me.bmMenu.DockControls.Add(Me.barDockControlRight)
            Me.bmMenu.Form = Me
            Me.bmMenu.Items.AddRange(New DevExpress.XtraBars.BarItem() {Me.bbiAddContact, Me.bsiCount})
            Me.bmMenu.MainMenu = Me.Bar2
            Me.bmMenu.MaxItemId = 3
            Me.bmMenu.StatusBar = Me.Bar3
            '
            'Bar2
            '
            Me.Bar2.BarName = "Main menu"
            Me.Bar2.DockCol = 0
            Me.Bar2.DockRow = 0
            Me.Bar2.DockStyle = DevExpress.XtraBars.BarDockStyle.Top
            Me.Bar2.LinksPersistInfo.AddRange(New DevExpress.XtraBars.LinkPersistInfo() {New DevExpress.XtraBars.LinkPersistInfo(DevExpress.XtraBars.BarLinkUserDefines.PaintStyle, Me.bbiAddContact, DevExpress.XtraBars.BarItemPaintStyle.CaptionGlyph)})
            Me.Bar2.OptionsBar.AllowQuickCustomization = False
            Me.Bar2.OptionsBar.DrawBorder = False
            Me.Bar2.OptionsBar.DrawDragBorder = False
            Me.Bar2.OptionsBar.MultiLine = True
            Me.Bar2.OptionsBar.UseWholeRow = True
            Me.Bar2.Text = "Main menu"
            '
            'bbiAddContact
            '
            Me.bbiAddContact.Caption = "Add"
            Me.bbiAddContact.Id = 0
            Me.bbiAddContact.ImageOptions.Image = CType(resources.GetObject("bbiAddContact.ImageOptions.Image"), System.Drawing.Image)
            Me.bbiAddContact.ImageOptions.LargeImage = CType(resources.GetObject("bbiAddContact.ImageOptions.LargeImage"), System.Drawing.Image)
            Me.bbiAddContact.Name = "bbiAddContact"
            '
            'Bar3
            '
            Me.Bar3.BarName = "Status bar"
            Me.Bar3.CanDockStyle = DevExpress.XtraBars.BarCanDockStyle.Bottom
            Me.Bar3.DockCol = 0
            Me.Bar3.DockRow = 0
            Me.Bar3.DockStyle = DevExpress.XtraBars.BarDockStyle.Bottom
            Me.Bar3.LinksPersistInfo.AddRange(New DevExpress.XtraBars.LinkPersistInfo() {New DevExpress.XtraBars.LinkPersistInfo(Me.bsiCount)})
            Me.Bar3.OptionsBar.AllowQuickCustomization = False
            Me.Bar3.OptionsBar.DrawDragBorder = False
            Me.Bar3.OptionsBar.UseWholeRow = True
            Me.Bar3.Text = "Status bar"
            '
            'bsiCount
            '
            Me.bsiCount.Caption = "0 Contacts"
            Me.bsiCount.Id = 2
            Me.bsiCount.Name = "bsiCount"
            Me.bsiCount.TextAlignment = System.Drawing.StringAlignment.Near
            '
            'barDockControlTop
            '
            Me.barDockControlTop.CausesValidation = False
            Me.barDockControlTop.Dock = System.Windows.Forms.DockStyle.Top
            Me.barDockControlTop.Location = New System.Drawing.Point(0, 0)
            Me.barDockControlTop.Manager = Me.bmMenu
            Me.barDockControlTop.Size = New System.Drawing.Size(682, 24)
            '
            'barDockControlBottom
            '
            Me.barDockControlBottom.CausesValidation = False
            Me.barDockControlBottom.Dock = System.Windows.Forms.DockStyle.Bottom
            Me.barDockControlBottom.Location = New System.Drawing.Point(0, 222)
            Me.barDockControlBottom.Manager = Me.bmMenu
            Me.barDockControlBottom.Size = New System.Drawing.Size(682, 25)
            '
            'barDockControlLeft
            '
            Me.barDockControlLeft.CausesValidation = False
            Me.barDockControlLeft.Dock = System.Windows.Forms.DockStyle.Left
            Me.barDockControlLeft.Location = New System.Drawing.Point(0, 24)
            Me.barDockControlLeft.Manager = Me.bmMenu
            Me.barDockControlLeft.Size = New System.Drawing.Size(0, 198)
            '
            'barDockControlRight
            '
            Me.barDockControlRight.CausesValidation = False
            Me.barDockControlRight.Dock = System.Windows.Forms.DockStyle.Right
            Me.barDockControlRight.Location = New System.Drawing.Point(682, 24)
            Me.barDockControlRight.Manager = Me.bmMenu
            Me.barDockControlRight.Size = New System.Drawing.Size(0, 198)
            '
            'gcContacts
            '
            Me.gcContacts.Location = New System.Drawing.Point(0, 24)
            Me.gcContacts.MainView = Me.gvContacts
            Me.gcContacts.MenuManager = Me.bmMenu
            Me.gcContacts.Name = "gcContacts"
            Me.gcContacts.Size = New System.Drawing.Size(682, 198)
            Me.gcContacts.TabIndex = 4
            Me.gcContacts.ViewCollection.AddRange(New DevExpress.XtraGrid.Views.Base.BaseView() {Me.gvContacts})
            '
            'gvContacts
            '
            Me.gvContacts.Columns.AddRange(New DevExpress.XtraGrid.Columns.GridColumn() {Me.FirstName, Me.colContactId, Me.colFullName, Me.colBusinessNumber, Me.colMobileNumber, Me.colEmailAddress})
            Me.gvContacts.GridControl = Me.gcContacts
            Me.gvContacts.Name = "gvContacts"
            Me.gvContacts.OptionsBehavior.Editable = False
            Me.gvContacts.OptionsCustomization.AllowGroup = False
            Me.gvContacts.OptionsDetail.EnableMasterViewMode = False
            Me.gvContacts.OptionsSelection.UseIndicatorForSelection = False
            Me.gvContacts.OptionsView.ShowGroupPanel = False
            '
            'colContactId
            '
            Me.colContactId.Caption = "Id"
            Me.colContactId.FieldName = "This.Id"
            Me.colContactId.Name = "colContactId"
            '
            'colFullName
            '
            Me.colFullName.Caption = "Name"
            Me.colFullName.FieldName = "FullName"
            Me.colFullName.Name = "colFullName"
            Me.colFullName.Visible = True
            Me.colFullName.VisibleIndex = 1
            Me.colFullName.Width = 76
            '
            'colBusinessNumber
            '
            Me.colBusinessNumber.Caption = "Business Number"
            Me.colBusinessNumber.FieldName = "BusinessNumber"
            Me.colBusinessNumber.Name = "colBusinessNumber"
            Me.colBusinessNumber.Visible = True
            Me.colBusinessNumber.VisibleIndex = 3
            Me.colBusinessNumber.Width = 113
            '
            'colMobileNumber
            '
            Me.colMobileNumber.Caption = "Mobile Number"
            Me.colMobileNumber.FieldName = "MobileNumber"
            Me.colMobileNumber.Name = "colMobileNumber"
            Me.colMobileNumber.Visible = True
            Me.colMobileNumber.VisibleIndex = 2
            Me.colMobileNumber.Width = 100
            '
            'colEmailAddress
            '
            Me.colEmailAddress.Caption = "Email Address"
            Me.colEmailAddress.FieldName = "EmailAddress"
            Me.colEmailAddress.Name = "colEmailAddress"
            Me.colEmailAddress.Visible = True
            Me.colEmailAddress.VisibleIndex = 4
            Me.colEmailAddress.Width = 246
            '
            'FirstName
            '
            Me.FirstName.Caption = "FirstName"
            Me.FirstName.FieldName = "This.FirstName"
            Me.FirstName.Name = "FirstName"
            Me.FirstName.Visible = True
            Me.FirstName.VisibleIndex = 0
            Me.FirstName.Width = 129
            '
            'UcContactsListView
            '
            Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
            Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
            Me.Controls.Add(Me.gcContacts)
        Me.Controls.Add(Me.barDockControlLeft)
        Me.Controls.Add(Me.barDockControlRight)
        Me.Controls.Add(Me.barDockControlBottom)
        Me.Controls.Add(Me.barDockControlTop)
        Me.Name = "UcContactsListView"
        Me.Size = New System.Drawing.Size(682, 247)
        CType(Me.bmMenu,System.ComponentModel.ISupportInitialize).EndInit
        CType(Me.gcContacts,System.ComponentModel.ISupportInitialize).EndInit
        CType(Me.gvContacts,System.ComponentModel.ISupportInitialize).EndInit
        Me.ResumeLayout(false)
        Me.PerformLayout

End Sub
        Friend WithEvents bmMenu As DevExpress.XtraBars.BarManager
        Friend WithEvents Bar2 As DevExpress.XtraBars.Bar
        Friend WithEvents bbiAddContact As DevExpress.XtraBars.BarButtonItem
        Friend WithEvents Bar3 As DevExpress.XtraBars.Bar
        Friend WithEvents barDockControlTop As DevExpress.XtraBars.BarDockControl
        Friend WithEvents barDockControlBottom As DevExpress.XtraBars.BarDockControl
        Friend WithEvents barDockControlLeft As DevExpress.XtraBars.BarDockControl
        Friend WithEvents barDockControlRight As DevExpress.XtraBars.BarDockControl
        Friend WithEvents gcContacts As DevExpress.XtraGrid.GridControl
        Friend WithEvents gvContacts As DevExpress.XtraGrid.Views.Grid.GridView
        Friend WithEvents bsiCount As DevExpress.XtraBars.BarStaticItem
        Friend WithEvents colContactId As DevExpress.XtraGrid.Columns.GridColumn
        Friend WithEvents colFullName As DevExpress.XtraGrid.Columns.GridColumn
        Friend WithEvents colBusinessNumber As DevExpress.XtraGrid.Columns.GridColumn
        Friend WithEvents colMobileNumber As DevExpress.XtraGrid.Columns.GridColumn
        Friend WithEvents colEmailAddress As DevExpress.XtraGrid.Columns.GridColumn
        Friend WithEvents FirstName As DevExpress.XtraGrid.Columns.GridColumn
    End Class
End Namespace