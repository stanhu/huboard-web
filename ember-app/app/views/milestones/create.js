import Ember from 'ember';
import ModalView from 'app/views/modal';
import KeyPressHandlingMixin from 'app/mixins/key-press-handling';

var MilestonesCreateView = ModalView.extend(KeyPressHandlingMixin, {
  classNames: ['milestone-create'],
  registerKeydownEvents: function(){
    var self = this,
      ctrl = self.get("controller");

    this.$().find("input").keydown(function(e){
      self.metaEnterHandler(e, function(enabled){
        if (enabled){ ctrl.send("submit"); }
      });
      self.enterHandler(e, function(enabled){
        if (!enabled) { e.preventDefault(); }
      });
    });
    this.$().find("textarea").keydown(function(e){
      self.metaEnterHandler(e, function(enabled){
        if (enabled) { ctrl.send("submit"); }
      });
    });
  }.on("didInsertElement"),
  tearDownEvents: function(){
    this.$().off("keydown");
  }.on("willDestroyElement"),
  modalCloseCriteria: function(){
    var textarea = this.$(".markdown-composer textarea");
    if (textarea.val().length){
      return true;
    }

    return false;
  }
});

export default MilestonesCreateView;
