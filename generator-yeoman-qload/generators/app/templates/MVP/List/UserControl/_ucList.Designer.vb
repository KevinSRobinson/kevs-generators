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
        Me.gc<%=data.plural%> = New DevExpress.XtraGrid.GridControl()
        Me.gv<%=data.plural%> = New DevExpress.XtraGrid.Views.Grid.GridView()

        <% for (var key in data.model.properties) {  %>
              Me.col<%= data._.startCase(key).replace(" ", "") %> = New DevExpress.XtraGrid.Columns.GridColumn()
        <% } %>


        CType(Me.gc<%=data.plural%>, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.gv<%=data.plural%>, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'gc<%=data.plural%>
        '
        Me.gc<%=data.plural%>.Dock = System.Windows.Forms.DockStyle.Fill
        Me.gc<%=data.plural%>.Location = New System.Drawing.Point(0, 0)
        Me.gc<%=data.plural%>.MainView = Me.gv<%=data.plural%>
        Me.gc<%=data.plural%>.Name = "gc<%=data.plural%>"
        Me.gc<%=data.plural%>.Size = New System.Drawing.Size(504, 284)
        Me.gc<%=data.plural%>.TabIndex = 0
        Me.gc<%=data.plural%>.ViewCollection.AddRange(New DevExpress.XtraGrid.Views.Base.BaseView() {Me.gv<%=data.plural%>})
        '
        'gv<%=data.plural%>
        '
        Me.gv<%=data.plural%>.GridControl = Me.gc<%=data.plural%>
        Me.gv<%=data.plural%>.Columns.AddRange(New DevExpress.XtraGrid.Columns.GridColumn() { <%=data.commaSeperatedLayoutControlList %> })
        Me.gv<%=data.plural%>.Name = "gv<%=data.plural%>"
        '
        
        <% for (var key in data.model.properties) {  %>
            Me.col<%= data._.startCase(key).replace(" ", "") %>.Caption = "<%= data._.startCase(key) %>"
            Me.col<%= data._.startCase(key).replace(" ", "") %>.FieldName = "<%= data._.startCase(key).replace(" ", "") %>"
            Me.col<%= data._.startCase(key).replace(" ", "") %>.Name = "col<%= data._.startCase(key).replace(" ", "") %>"
            Me.col<%= data._.startCase(key).replace(" ", "") %>.Visible = True
            Me.col<%= data._.startCase(key).replace(" ", "") %>.VisibleIndex = 0
        <% } %>


        'UserControl2
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.Controls.Add(Me.gc<%=data.plural%>)
        Me.Name = "UserControl2"
        Me.Size = New System.Drawing.Size(504, 284)
        CType(Me.gc<%=data.plural%>, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.gv<%=data.plural%>, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)

    End Sub

    Friend WithEvents gc<%=data.plural%> As DevExpress.XtraGrid.GridControl
    Friend WithEvents gv<%=data.plural%> As DevExpress.XtraGrid.Views.Grid.GridView

    <% for (var key in data.model.properties) {  %>
         Friend WithEvents col<%= data._.startCase(key).replace(" ", "") %> As DevExpress.XtraGrid.Columns.GridColumn        
    <% } %>
      
End Class
