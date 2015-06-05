$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "enterprise/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "enterprise"
  s.version     = Enterprise::VERSION
  s.authors     = [""]
  s.email       = [""]
  s.homepage    = "TODO"
  s.summary     = "TODO: Summary of Enterprise."
  s.description = "TODO: Description of Enterprise."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.2.0"

end
