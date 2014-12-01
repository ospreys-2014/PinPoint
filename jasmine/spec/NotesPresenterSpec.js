describe("NotePresenter", function(){
  beforeEach(function() {
    dummyNote = {
      noteTime: "0:30",
      noteContent: "I'm a dummy note"
    };
    notePresenter = new PinPoint.NotePresenter(dummyNote);
  });

  it("should be defined.", function(){
    expect(notePresenter).toBeDefined();
  });

  it("should contain a note when instantiated",function(){
    expect(notePresenter.note).toBeDefined;
    expect(notePresenter.note).not.toEqual(undefined);
    expect(notePresenter.note).not.toEqual(null);
  })

});
