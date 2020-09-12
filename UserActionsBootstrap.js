window.coveoCustomScripts['SpeedbitAgentPanel_Impact'] = function (promise, component) {
  const fakeActions = [
    {
      T: new Date('05/23/2019 12:00:00 EDT').getTime(),
      N: 'Search',
      V: { query_expression: 'heart rate' }
    },
    {
      T: new Date('05/23/2019 12:00:10 EDT').getTime(),
      N: 'Click',
      V: { uri_hash: 'q6YbV8207QñR9uLM' }
    },
    {
      T: new Date('05/23/2019 12:00:00 EDT').getTime(),
      N: 'Search',
      V: { query_expression: 'how to track heart rate' }
    },      
    {
      T: new Date('05/23/2019 12:00:10 EDT').getTime(),
      N: 'Click',
      V: { uri_hash: 'XGosjsCoh4O4cjuð' }
    },
    {
      T: new Date('05/23/2019 12:00:15 EDT').getTime(),
      N: 'Search',
      V: { query_expression: 'rma my device' }
    },
    {
      T: new Date('05/23/2019 12:00:30 EDT').getTime(),
      N: 'Click',
      V: { uri_hash: 'GFVpphANEH7yIhVH' }
    },
    {
      T: new Date('05/23/2019 18:01:45.123 EDT').getTime(),
      N: 'Custom',
      V: {
        event_type: 'CaseSubmit',
        event_value: ''
      }
    }
  ];

  if (component && component.getElements) {
    var root = component.getElements().map(function (element) {
      return element.querySelector('.CoveoSearchInterface');
    }).find(function (element) {
      return element != null;
    });
  }

  if (root) {
    Coveo.$$(root).on(Coveo.InitializationEvents.afterInitialization, () => {
      let userProfileModel = Coveo.get(root, 'UserProfileModel');
      if(userProfileModel) {
       userProfileModel.registerActions(fakeActions, Coveo.get(root, 'SearchInterface').queryController);
      }
    });
  }
}