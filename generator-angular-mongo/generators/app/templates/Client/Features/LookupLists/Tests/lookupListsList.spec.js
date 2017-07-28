describe("LookupList", function () {

        describe("lookupListsList", function () {

            var vm;

            //instantiate module
            beforeEach(bard.appModule('app'));

            //instantiate component controller
            beforeEach(function () {
                bard.inject(this, '$componentController');
                vm = $componentController('lookupListsList', null);
            });


            it("should be defined", function () {
                expect(vm).toBeDefined();
            });
        });

});

