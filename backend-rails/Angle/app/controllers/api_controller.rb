class ApiController < ActionController::Base
  
  def documentation
    render file: "app/assets/documentation/readme.md"
  end

  def datatable
    render file: "app/assets/api/datatable.json"
  end

  def jqgrid
    render file: "app/assets/api/jqgrid.json"
  end

  def jqgridtree
    render file: "app/assets/api/jqgrid-tree.json"
  end

  def i18n
    # locale param was defined in config/routes.rb
    render file: "app/assets/i18n/" + params['locale']
  end

  def xeditablegroups
    render file: "app/assets/api/xeditable-groups.json"
  end

  def xeditable
    render :nothing => true
  end

end
