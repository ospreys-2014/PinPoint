describe("Note", function(){
  beforeEach(function() {
    note = new PinPoint.Note();
    localStorage["time"] = "0:30"
    localStorage["url"] = "http://www.youtube.com/12i3t47grfi"
  });

  it("should be defined.", function(){
    expect(note).toBeDefined();
  });

  describe("#assignURL", function(){
    it("should assign note's websiteUrl attribute to new url.", function(){
      note.assignURL();
      expect(note.websiteUrl).not.toEqual("");
      expect(note.websiteUrl).not.toEqual(undefined);
      expect(note.websiteUrl).not.toEqual(null);
    });
  });

  describe("#assignContent", function(){
    xit("should assign note's noteContent attribute to new value.", function(){
      note.assignContent();
      expect(note.noteContent).toEqual("");
      expect(note.noteContent).not.toEqual(undefined);
      expect(note.noteContent).not.toEqual(null);
    });
  });

  describe("#assignTime", function(){
    it("should assign note's noteTime attribute to a time.", function(){
      note.assignTime();
      expect(note.noteTime).not.toEqual("");
      expect(note.noteTime).not.toEqual(undefined);
      expect(note.noteTime).not.toEqual(null);
    });
  });

  describe("#assignTimeUrl", function(){
    it("should assign note's timeUrl attribute to localstorage timeUrl.", function(){
      note.assignTimeUrl();
      expect(note.timeUrl).not.toEqual("");
      expect(note.timeUrl).not.toEqual(undefined);
      expect(note.timeUrl).not.toEqual(null);
    });
  });

  describe("#assignStorageKey()", function(){
    it("should assign a new storage key to the note's storage key attribute", function() {
      note.assignStorageKey();
      expect(note.storageKey).not.toEqual("")
      expect(note.storageKey).not.toEqual(undefined)
      expect(note.storageKey).not.toEqual(null)
    });
  });
});
