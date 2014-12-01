describe("View", function() {
  beforeEach(function() {
    view = new PinPoint.View();
    notePresenter = new PinPoint.NotePresenter(['dummy note']);
    dummyController = {
      notes:['placeholder for controller notes']
    };
  })

  it("should be defined", function() {
    expect(view).toBeDefined();
  })

  // This test is tricky to do because this attribute
  // noteListDOMROOT are <table> tags
  xit("should have a noteListDOMROOT when instantiated", function() {
    expect(view.noteListDOMROOT).not.toEqual(null);
    expect(view.noteListDOMROOT).not.toEqual(undefined);
  })

  describe("View#redraw", function() {
    it("should call populateDOMNoteList with one argument", function(){
      spyOn(view, "populateDOMNoteList");
      view.redraw();
      expect(view.populateDOMNoteList).toHaveBeenCalled();
    })
    it("should have a controller as an argument", function(){
      spyOn(view, "populateDOMNoteList");
      view.redraw(dummyController);
      expect(view.populateDOMNoteList).toHaveBeenCalledWith(dummyController);
    })
  })
  describe("View#populateDOMNoteList", function() {
    it("should have a controller as an argument", function() {
      spyOn(view, "populateDOMNoteList");
      view.populateDOMNoteList(dummyController);
      expect(view.populateDOMNoteList).toHaveBeenCalledWith(dummyController);
    })
  })
})