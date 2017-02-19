var srv = function(input) {

    var noteTable = {
        "G9": 0x7F,
        "Gb9": 0x7E,
        "F9": 0x7D,
        "E9": 0x7C,
        "Eb9": 0x7B,
        "D9": 0x7A,
        "Db9": 0x79,
        "C9": 0x78,
        "B8": 0x77,
        "Bb8": 0x76,
        "A8": 0x75,
        "Ab8": 0x74,
        "G8": 0x73,
        "Gb8": 0x72,
        "F8": 0x71,
        "E8": 0x70,
        "Eb8": 0x6F,
        "D8": 0x6E,
        "Db8": 0x6D,
        "C8": 0x6C,
        "B7": 0x6B,
        "Bb7": 0x6A,
        "A7": 0x69,
        "Ab7": 0x68,
        "G7": 0x67,
        "Gb7": 0x66,
        "F7": 0x65,
        "E7": 0x64,
        "Eb7": 0x63,
        "D7": 0x62,
        "Db7": 0x61,
        "C7": 0x60,
        "B6": 0x5F,
        "Bb6": 0x5E,
        "A6": 0x5D,
        "Ab6": 0x5C,
        "G6": 0x5B,
        "Gb6": 0x5A,
        "F6": 0x59,
        "E6": 0x58,
        "Eb6": 0x57,
        "D6": 0x56,
        "Db6": 0x55,
        "C6": 0x54,
        "B5": 0x53,
        "Bb5": 0x52,
        "A5": 0x51,
        "Ab5": 0x50,
        "G5": 0x4F,
        "Gb5": 0x4E,
        "F5": 0x4D,
        "E5": 0x4C,
        "Eb5": 0x4B,
        "D5": 0x4A,
        "Db5": 0x49,
        "C5": 0x48,
        "B4": 0x47,
        "Bb4": 0x46,
        "A4": 0x45,
        "Ab4": 0x44,
        "G4": 0x43,
        "Gb4": 0x42,
        "F4": 0x41,
        "E4": 0x40,
        "Eb4": 0x3F,
        "D4": 0x3E,
        "Db4": 0x3D,
        "C4": 0x3C,
        "B3": 0x3B,
        "Bb3": 0x3A,
        "A3": 0x39,
        "Ab3": 0x38,
        "G3": 0x37,
        "Gb3": 0x36,
        "F3": 0x35,
        "E3": 0x34,
        "Eb3": 0x33,
        "D3": 0x32,
        "Db3": 0x31,
        "C3": 0x30,
        "B2": 0x2F,
        "Bb2": 0x2E,
        "A2": 0x2D,
        "Ab2": 0x2C,
        "G2": 0x2B,
        "Gb2": 0x2A,
        "F2": 0x29,
        "E2": 0x28,
        "Eb2": 0x27,
        "D2": 0x26,
        "Db2": 0x25,
        "C2": 0x24,
        "B1": 0x23,
        "Bb1": 0x22,
        "A1": 0x21,
        "Ab1": 0x20,
        "G1": 0x1F,
        "Gb1": 0x1E,
        "F1": 0x1D,
        "E1": 0x1C,
        "Eb1": 0x1B,
        "D1": 0x1A,
        "Db1": 0x19,
        "C1": 0x18,
        "B0": 0x17,
        "Bb0": 0x16,
        "A0": 0x15,
        "Ab0": 0x14,
        "G0": 0x13,
        "Gb0": 0x12,
        "F0": 0x11,
        "E0": 0x10,
        "Eb0": 0x0F,
        "D0": 0x0E,
        "Db0": 0x0D,
        "C0": 0x0C
    };

    var nums = []; //array of random values
    var keys = []; //array of keys
    var notes = []; //array of random keys

    for (var key in dictionary) {
        if (dictionary.hasOwnProperty(key)) {
            keys.push(key);

            for (var i = 0; i < 10; i++) {
                generated = Math.random() * Number(input);
                if (generated < 116 && generated > 0) {
                    nums.push(generated);
                }
            }


            for (var y = 0; y < nums.length; i++) {
                notes[y] = keys[nums[y]];
            }

            var noteEvents = [];
            notes.forEach(function(note) {
                Array.prototype.push.apply(noteEvents, MidiEvent.createNote(note));
            });
            var track = new MidiTrack({
                events: noteEvents
            });
            var song = MidiWriter({
                tracks: [track]
            });
            song.save();


        }
    }
}

var gen = function(input) {
    for (x = 0; x < 10; x++) {
        svr(input);
    }
}

module.exports = gen;
