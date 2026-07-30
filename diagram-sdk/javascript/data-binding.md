---
layout: post
title: Data binding in JavaScript Diagram control | Syncfusion®
description: Learn here all about Data binding in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Data binding 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Data binding in JavaScript Diagram control

Its Essential<sup style="font-size:70%">&reg;</sup> for binding external data to the diagram, enabling dynamic creation of nodes and connectors based on the provided data. Here's a detailed explanation of the key properties and their usage:

## DataSource settings

The [`dataSourceSettings`](../api/diagram/dataSourceModel) property of diagram configures the external data source that binds to the diagram, making it possible to populate the diagram with nodes and connectors dynamically.

* [`Data Manager`](../api/diagram/dataSourceModel#datamanager) - Defines the data source as a collection of objects or an instance of DataManager to populate the diagram.

* [`ID`](../api/diagram/dataSourceModel#id) - The unique identifier for each data in the data source.

* [`parentId`](../api/diagram/dataSourceModel#parentid) - Establishes the hierarchical relationship between nodes by linking each node to its parent node. This property is vital for creating tree structures within the diagram.

* [`root`](../api/diagram/dataSourceModel#root) - Specifies the root node of the diagram when data is loaded. This root node serves as the starting point for the diagram's structure.

* The [`doBinding`](../api/diagram/dataSourceModel#dobinding) function is used to customize a node based on the data source. It is triggered during the initialization of each node, allowing you to apply specific configurations or data-driven customizations to the node.

* Diagram supports two types of data binding. They are:

    1. Local data
    2. Remote data

## Local data

Diagram can be populated based on user-defined JSON data (Local Data) by mapping the relevant data source fields.

To map user-defined JSON data to the diagram, configure the fields in [`dataSourceSettings`](../api/diagram/dataSourceModel). The following code example illustrates how to bind local data with the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/dataBinding-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/dataBinding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/dataBinding-cs1" %}

N> To convert the data source into nodes and connectors, `DataBinding` should be injected into the diagram.

## Remote data

You can bind the diagram with remote data by using [`dataManager`](../api/diagram/datasourcemodel#datamanager). 

[`DataManager`](https://ej2.syncfusion.com/documentation/data) can be bound to remote data source by assigning service end point URL to the `url` property. With the provided url, the DataManager handles all communication with the data server with help of queries.

When querying data, the `DataManager` will convert the query object(Query) into server request after calling [`executeQuery`](../api/data/dataManager#executequery) and waits for the server response(`JSON` format).

 The following code illustrates how to bind remote data to the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/dataBinding-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/dataBinding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/dataBinding-cs2" %}

## CRUD

This feature allows you to read the data source and perform add or edit or delete the data in data source at runtime.

## Read DataSource

* This feature allows you to define the nodes and connectors collection in the data source and connectionDataSource respectively.

* You can set the data collection in the model’s dataSourceSettings [`dataSource`](../api/diagram/dataSourceModel#datasource) property. The nodes will be generated based on the data specified in the data source.

* You can set the connector collection in the model’s dataSourceSettings [`connectionDataSource`](../api/diagram/dataSourceModel#connectionDataSource) property.

* The dataSourceSettings connectionDataSource [`dataManager`](../api/diagram/connectionDataSourceModel#dataManager) property is used to set the data source for the connection data source items.

* If you have a data (data will be set in the dataSource property) with parent relationship in the database and also defined the connector in the connectionDataSource simultaneously, then the connectors set in the connectionDataSource will be considered as a priority to render the connector.

* The dataSourceSettings [`crudAction’s`](../api/diagram/dataSourceModel#crudAction) [`read`](../api/diagram/crudActionModel#read) property specifies the method, which is used to read the data source and its populate the nodes in the diagram.

* The connectionDataSource crudAction’s [`read`](../api/diagram/crudActionModel#read) specifies the method, which is used to read the data source and its populates the connectors in the diagram.

* The dataSourceSettings’s [`id`](../api/diagram/dataSourceModel#id) and connectionDataSource’s [`id`](../api/diagram/connectionDataSourceModel#id) properties are used to define the unique field of each JSON data.

* The connectionDataSource’s [`sourceID`](../api/diagram/connectionDataSourceModel#sourceID) and [`targetID`](../api/diagram/connectionDataSourceModel#targetID) properties are used to set the sourceID and targetID for connection data source item.

* The connectionDataSource’s [`sourcePointX`](../api/diagram/connectiondatasourcemodel#sourcepointx), [`sourcePointY`](../api/diagram/connectiondatasourcemodel#sourcepointy), [`targetPointX`](../api/diagram/connectiondatasourcemodel#targetpointx), and [`targetPointY`](../api/diagram/connectiondatasourcemodel#targetpointy) properties are used to define the sourcePoint and targetPoint values for connector from data source.

* The dataSourceSettings crudAction’s [`customFields`](../api/diagram/crudActionModel#customFields) property is used to maintain the additional information for nodes.

* Similarly, connectionDataSource’s crudAction’s [`customFields`](../api/diagram/crudActionModel#customFields) is used to maintain the additional information for connectors.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/dataBinding-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/dataBinding-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/dataBinding-cs5" %}

## How to perform Editing at runtime

* The dataSourceSettings crudAction object allows you to define the method, which is used to get the changes done in the data source defined for shapes from the client-side to the server-side.

* Similarly, the connectionDataSource crudAction object allows you to define the method, which is used to get the changes done in the data source defined for connectors from the client-side to the server-side.

## InsertData

* The dataSourceSettings crudAction’s [`create`](../api/diagram/crudActionModel#create) property specifies the method, which is used to get the nodes added from the client-side to the server-side.

* The connectionDataSource crudAction’s  [`create`](../api/diagram/crudActionModel#create) specifies the method, which is used to get the connectors added from the client-side to the server-side.

* The following code example illustrates how to send the newly added or inserted data from the client to server-side.

```ts

//Initialize diagram
var diagram = new ej.diagrams.Diagram({
     dataSourceSettings: {
       crudAction:
        {
            //Url which triggers the server side AddNodes method
            create: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/AddNodes',
        },
     }
     connectionDataSource: {
            crudAction: {
                //Url which triggers the server side AddConnectors method
                create: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/AddConnectors',
            }
     }
},'#diagram');
//Sends the newly added nodes/connectors from client side to the server side through the URL which is specified in server side.
diagram.insertData();

```

## UpdateData

* The dataSourceSettings crudAction’s [`update`](../api/diagram/crudActionModel#update) property specifies the method, which is used to get the modified nodes from the client-side to the server-side.

* The connectionDataSource crudAction’s [`update`](../api/diagram/crudActionModel#update) specifies the method, which is used to get the modified connectors from the client-side to the server-side.

* The following code example illustrates how to send the updated data from the client to the server side.

```ts

//Initialize diagram
var diagram = new ej.diagrams.Diagram({
     dataSourceSettings: {
       crudAction:
        {
           //Url which triggers the server side UpdateNodes method
           update: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/UpdateNodes',
        },
     }
     connectionDataSource: {
        crudAction: {
           //Url which triggers the server side UpdateConnectors method
           update: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/UpdateConnectors',
        }
     }
},'#diagram');
//Sends the updated nodes/connectors from client side to the server side through the URL which is specified in server side.
diagram.updateData();

```

## DeleteData

* The dataSourceSettings crudAction’s [`destroy`](../api/diagram/crudActionModel#destroy) property specifies the method, which is used to get the deleted nodes from the client-side to the server-side.

* The connectionDataSource crudAction’s [`destroy`](../api/diagram/crudActionModel#destroy) specifies the method, which is used to get the deleted connectors from the client-side to the server-side.

```ts

//Initialize diagram
var diagram = new ej.diagrams.Diagram({
     dataSourceSettings: {
       crudAction:
        {
          //Url which triggers the server side DeleteNodes method
          destroy: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/DeleteNodes',
        },
     }
     connectionDataSource: {
        crudAction: {
           //Url which triggers the server side DeleteConnectors method
           destroy: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/DeleteConnectors',
        }
     }
},'#diagram');
//Sends the deleted nodes/connectors from client side to the server side through the URL which is specified in server side.
diagram.removeData();

```

## See Also

* [How to arrange the diagram nodes and connectors using various layout](./automatic-layout)
