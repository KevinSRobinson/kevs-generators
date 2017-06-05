<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class uc<%=data.model.title%>Details
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
        
         <% for (var key in data.model.properties) {  
         for (var subkey in data.model.properties[key]) {

            if(data.model.properties[key][subkey] === "string") { %>
                   Me.te<%= data._.startCase(key).replace(" ", "") %> = New DevExpress.XtraEditors.LabelControl() 
            <% }  
            if(data.model.properties[key][subkey] === "date") { %>
                   Me.te<%= data._.startCase(key).replace(" ", "") %> = New DevExpress.XtraEditors.LabelControl()  
            <% }  
           } %>  
         Me.lc<%= key %> = New DevExpress.XtraLayout.LayoutControlItem()
    <% } %>  

       


        CType(Me.LayoutControl1, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.LayoutControl1.SuspendLayout()
        CType(Me.LayoutControlGroup1, System.ComponentModel.ISupportInitialize).BeginInit()


        <% 
        for (var key in data.model.properties) {  %>          
             CType(Me.lc<%= key %>, System.ComponentModel.ISupportInitialize).BeginInit()
        <% } %>
       

        Me.SuspendLayout()
        '
        'LayoutControl1
        '
        <% for (var key in data.model.properties) {  %>
             Me.LayoutControl1.Controls.Add(Me.te<%=data._.startCase(key).replace(" ", "") %>)
        <% } %>
       
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



        Me.LayoutControlGroup1.Items.AddRange(New DevExpress.XtraLayout.BaseLayoutItem() { <%=data.commaSeperatedLayoutControlList %>})
 

        Me.LayoutControlGroup1.Location = New System.Drawing.Point(0, 0)
        Me.LayoutControlGroup1.Name = "LayoutControlGroup1"
        Me.LayoutControlGroup1.Size = New System.Drawing.Size(251, 111)
        Me.LayoutControlGroup1.TextVisible = False
        

       

        <% for (var key in data.model.properties) {  %>
            'lc<%= key %>
            '
            Me.lc<%= key %>.Control = Me.te<%= key %>
            Me.lc<%= key %>.Location = New System.Drawing.Point(0, 0)
            Me.lc<%= key %>.Name = "lc<%= key %>"
            Me.lc<%= key %>.Size = New System.Drawing.Size(231, 24)
            Me.lc<%= key %>.Text = "<%= data._.startCase(key) %>"
            Me.lc<%= key %>.TextSize = New System.Drawing.Size(51, 13)

            'te<%= key %>
            '
            Me.te<%= key %>.Location = New System.Drawing.Point(67, 12)
            Me.te<%= key %>.Name = "te<%= key %>"
            Me.te<%= key %>.Size = New System.Drawing.Size(172, 20)
            Me.te<%= key %>.StyleController = Me.LayoutControl1
            Me.te<%= key %>.TabIndex = 4
            '
            

        <% } %>
       
        '
     
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


        <% for (var key in data.model.properties) {  %>           
            CType(Me.lc<%= key %>, System.ComponentModel.ISupportInitialize).EndInit()
        <% } %>


        Me.ResumeLayout(False)

    End Sub

    Friend WithEvents LayoutControl1 As DevExpress.XtraLayout.LayoutControl
    Friend WithEvents LayoutControlGroup1 As DevExpress.XtraLayout.LayoutControlGroup


    <% for (var key in data.model.properties) {  
         for (var subkey in data.model.properties[key]) {

            if(data.model.properties[key][subkey] === "string") { %>
                 Friend WithEvents te<%= data._.startCase(key).replace(" ", "") %> As DevExpress.XtraEditors.LabelControl    
            <% }  
            if(data.model.properties[key][subkey] === "date") { %>
                 Friend WithEvents te<%= data._.startCase(key).replace(" ", "") %> As DevExpress.XtraEditors.LabelControl    
            <% }  
           } %>  
         Friend WithEvents lc<%= key %> As DevExpress.XtraLayout.LayoutControlItem
    <% } %>  

End Class
