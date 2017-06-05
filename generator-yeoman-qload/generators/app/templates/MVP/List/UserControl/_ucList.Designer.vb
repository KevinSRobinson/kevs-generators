<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class uc<%=data.model.title%>List
    Inherits System.Windows.Forms.UserControl

    'UserControl overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()> _
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
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.GridControl1 = New DevExpress.XtraGrid.GridControl()
        Me.GridView1 = New DevExpress.XtraGrid.Views.Grid.GridView()

        <% for (var key in data.model.properties) {  %>
              Me.col<%= data._.startCase(key).replace(" ", "") %> = New DevExpress.XtraGrid.Columns.GridColumn()
        <% } %>


        CType(Me.GridControl1, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.GridView1, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'GridControl1
        '
        Me.GridControl1.Dock = System.Windows.Forms.DockStyle.Fill
        Me.GridControl1.Location = New System.Drawing.Point(0, 0)
        Me.GridControl1.MainView = Me.GridView1
        Me.GridControl1.Name = "GridControl1"
        Me.GridControl1.Size = New System.Drawing.Size(504, 284)
        Me.GridControl1.TabIndex = 0
        Me.GridControl1.ViewCollection.AddRange(New DevExpress.XtraGrid.Views.Base.BaseView() {Me.GridView1})
        '
        'GridView1
        '
        Me.GridView1.GridControl = Me.GridControl1
        Me.GridView1.Columns.AddRange(New DevExpress.XtraGrid.Columns.GridColumn() { <%=data.commaSeperatedLayoutControlList %> })
        Me.GridView1.Name = "GridView1"
        '
        
        <% for (var key in data.model.properties) {  %>
            Me.col<%= data._.startCase(key).replace(" ", "") %>.Caption = "<%= data._.startCase(key) %>"
            Me.col<%= data._.startCase(key).replace(" ", "") %>.FieldName = "col<%= data._.startCase(key).replace(" ", "") %>"
            Me.col<%= data._.startCase(key).replace(" ", "") %>.Name = "col<%= data._.startCase(key).replace(" ", "") %>"
            Me.col<%= data._.startCase(key).replace(" ", "") %>.Visible = True
            Me.col<%= data._.startCase(key).replace(" ", "") %>.VisibleIndex = 0
        <% } %>


        'UserControl2
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.Controls.Add(Me.GridControl1)
        Me.Name = "UserControl2"
        Me.Size = New System.Drawing.Size(504, 284)
        CType(Me.GridControl1, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.GridView1, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)

    End Sub

    Friend WithEvents GridControl1 As DevExpress.XtraGrid.GridControl
    Friend WithEvents GridView1 As DevExpress.XtraGrid.Views.Grid.GridView

    <% for (var key in data.model.properties) {  %>
         Friend WithEvents col<%= data._.startCase(key).replace(" ", "") %> As DevExpress.XtraGrid.Columns.GridColumn        
    <% } %>
      
End Class
