(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Redactor/Field.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Redactor/Field.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_redactor_plugins_table_table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vendor/redactor/_plugins/table/table.js */ "./resources/vendor/redactor/_plugins/table/table.js");
/* harmony import */ var _vendor_redactor_plugins_table_table_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_redactor_plugins_table_table_js__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'redactor-fieldtype',
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      "default": ''
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Redactor/Field.vue?vue&type=template&id=99cbd11e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Redactor/Field.vue?vue&type=template&id=99cbd11e& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("redactor", {
    attrs: {
      name: _vm.field.handle,
      label: _vm.field.name,
      help: _vm.field.help,
      placeholder: _vm.field.settings.placeholder,
      value: _vm.value,
      config: {
        plugins: ["table"]
      }
    },
    on: {
      input: function($event) {
        return _vm.$emit("input", $event)
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/fieldtypes/Redactor/Field.vue":
/*!****************************************************!*\
  !*** ./resources/js/fieldtypes/Redactor/Field.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_99cbd11e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=99cbd11e& */ "./resources/js/fieldtypes/Redactor/Field.vue?vue&type=template&id=99cbd11e&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/Redactor/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_99cbd11e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_99cbd11e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/Redactor/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/Redactor/Field.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/fieldtypes/Redactor/Field.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Redactor/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/Redactor/Field.vue?vue&type=template&id=99cbd11e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/fieldtypes/Redactor/Field.vue?vue&type=template&id=99cbd11e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_99cbd11e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=99cbd11e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Redactor/Field.vue?vue&type=template&id=99cbd11e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_99cbd11e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_99cbd11e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/redactor/_plugins/table/table.js":
/*!***********************************************************!*\
  !*** ./resources/vendor/redactor/_plugins/table/table.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($R) {
  $R.add('plugin', 'table', {
    translations: {
      en: {
        "table": "Table",
        "insert-table": "Insert table",
        "insert-row-above": "Insert row above",
        "insert-row-below": "Insert row below",
        "insert-column-left": "Insert column left",
        "insert-column-right": "Insert column right",
        "add-head": "Add head",
        "delete-head": "Delete head",
        "delete-column": "Delete column",
        "delete-row": "Delete row",
        "delete-table": "Delete table"
      }
    },
    init: function init(app) {
      this.app = app;
      this.lang = app.lang;
      this.opts = app.opts;
      this.caret = app.caret;
      this.editor = app.editor;
      this.toolbar = app.toolbar;
      this.component = app.component;
      this.inspector = app.inspector;
      this.insertion = app.insertion;
      this.selection = app.selection;
    },
    // messages
    ondropdown: {
      table: {
        observe: function observe(dropdown) {
          this._observeDropdown(dropdown);
        }
      }
    },
    onbottomclick: function onbottomclick() {
      this.insertion.insertToEnd(this.editor.getLastNode(), 'table');
    },
    // public
    start: function start() {
      var dropdown = {
        observe: 'table',
        'insert-table': {
          title: this.lang.get('insert-table'),
          api: 'plugin.table.insert'
        },
        'insert-row-above': {
          title: this.lang.get('insert-row-above'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.addRowAbove'
        },
        'insert-row-below': {
          title: this.lang.get('insert-row-below'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.addRowBelow'
        },
        'insert-column-left': {
          title: this.lang.get('insert-column-left'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.addColumnLeft'
        },
        'insert-column-right': {
          title: this.lang.get('insert-column-right'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.addColumnRight'
        },
        'add-head': {
          title: this.lang.get('add-head'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.addHead'
        },
        'delete-head': {
          title: this.lang.get('delete-head'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.deleteHead'
        },
        'delete-column': {
          title: this.lang.get('delete-column'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.deleteColumn'
        },
        'delete-row': {
          title: this.lang.get('delete-row'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.deleteRow'
        },
        'delete-table': {
          title: this.lang.get('delete-table'),
          classname: 'redactor-table-item-observable',
          api: 'plugin.table.deleteTable'
        }
      };
      var obj = {
        title: this.lang.get('table')
      };
      var $button = this.toolbar.addButtonBefore('link', 'table', obj);
      $button.setIcon('<i class="re-icon-table"></i>');
      $button.setDropdown(dropdown);
    },
    insert: function insert() {
      var rows = 2;
      var columns = 3;
      var $component = this.component.create('table');

      for (var i = 0; i < rows; i++) {
        $component.addRow(columns);
      }

      $component = this.insertion.insertHtml($component);
      this.caret.setStart($component);
    },
    addRowAbove: function addRowAbove() {
      var $component = this._getComponent();

      if ($component) {
        var current = this.selection.getCurrent();
        var $row = $component.addRowTo(current, 'before');
        this.caret.setStart($row);
      }
    },
    addRowBelow: function addRowBelow() {
      var $component = this._getComponent();

      if ($component) {
        var current = this.selection.getCurrent();
        var $row = $component.addRowTo(current, 'after');
        this.caret.setStart($row);
      }
    },
    addColumnLeft: function addColumnLeft() {
      var $component = this._getComponent();

      if ($component) {
        var current = this.selection.getCurrent();
        this.selection.save();
        $component.addColumnTo(current, 'left');
        this.selection.restore();
      }
    },
    addColumnRight: function addColumnRight() {
      var $component = this._getComponent();

      if ($component) {
        var current = this.selection.getCurrent();
        this.selection.save();
        $component.addColumnTo(current, 'right');
        this.selection.restore();
      }
    },
    addHead: function addHead() {
      var $component = this._getComponent();

      if ($component) {
        this.selection.save();
        $component.addHead();
        this.selection.restore();
      }
    },
    deleteHead: function deleteHead() {
      var $component = this._getComponent();

      if ($component) {
        var current = this.selection.getCurrent();
        var $head = $R.dom(current).closest('thead');

        if ($head.length !== 0) {
          $component.removeHead();
          this.caret.setStart($component);
        } else {
          this.selection.save();
          $component.removeHead();
          this.selection.restore();
        }
      }
    },
    deleteColumn: function deleteColumn() {
      var $component = this._getComponent();

      if ($component) {
        var current = this.selection.getCurrent();
        var $currentCell = $R.dom(current).closest('td, th');
        var nextCell = $currentCell.nextElement().get();
        var prevCell = $currentCell.prevElement().get();
        $component.removeColumn(current);
        if (nextCell) this.caret.setStart(nextCell);else if (prevCell) this.caret.setEnd(prevCell);else this.deleteTable();
      }
    },
    deleteRow: function deleteRow() {
      var $component = this._getComponent();

      if ($component) {
        var current = this.selection.getCurrent();
        var $currentRow = $R.dom(current).closest('tr');
        var nextRow = $currentRow.nextElement().get();
        var prevRow = $currentRow.prevElement().get();
        $component.removeRow(current);
        if (nextRow) this.caret.setStart(nextRow);else if (prevRow) this.caret.setEnd(prevRow);else this.deleteTable();
      }
    },
    deleteTable: function deleteTable() {
      var table = this._getTable();

      if (table) {
        this.component.remove(table);
      }
    },
    // private
    _getTable: function _getTable() {
      var current = this.selection.getCurrent();
      var data = this.inspector.parse(current);

      if (data.isTable()) {
        return data.getTable();
      }
    },
    _getComponent: function _getComponent() {
      var current = this.selection.getCurrent();
      var data = this.inspector.parse(current);

      if (data.isTable()) {
        var table = data.getTable();
        return this.component.create('table', table);
      }
    },
    _observeDropdown: function _observeDropdown(dropdown) {
      var table = this._getTable();

      var items = dropdown.getItemsByClass('redactor-table-item-observable');
      var tableItem = dropdown.getItem('insert-table');

      if (table) {
        this._observeItems(items, 'enable');

        tableItem.disable();
      } else {
        this._observeItems(items, 'disable');

        tableItem.enable();
      }
    },
    _observeItems: function _observeItems(items, type) {
      for (var i = 0; i < items.length; i++) {
        items[i][type]();
      }
    }
  });
})(Redactor);

(function ($R) {
  $R.add('class', 'table.component', {
    mixins: ['dom', 'component'],
    init: function init(app, el) {
      this.app = app; // init

      return el && el.cmnt !== undefined ? el : this._init(el);
    },
    // public
    addHead: function addHead() {
      this.removeHead();
      var columns = this.$element.find('tr').first().children('td, th').length;
      var $head = $R.dom('<thead>');

      var $row = this._buildRow(columns, '<th>');

      $head.append($row);
      this.$element.prepend($head);
    },
    addRow: function addRow(columns) {
      var $row = this._buildRow(columns);

      this.$element.append($row);
      return $row;
    },
    addRowTo: function addRowTo(current, type) {
      return this._addRowTo(current, type);
    },
    addColumnTo: function addColumnTo(current, type) {
      var $current = $R.dom(current);
      var $currentRow = $current.closest('tr');
      var $currentCell = $current.closest('td, th');
      var index = 0;
      $currentRow.find('td, th').each(function (node, i) {
        if (node === $currentCell.get()) index = i;
      });
      this.$element.find('tr').each(function (node) {
        var $node = $R.dom(node);
        var origCell = $node.find('td, th').get(index);
        var $origCell = $R.dom(origCell);
        var $td = $origCell.clone();
        $td.html('<div data-redactor-tag="tbr"></div>');
        if (type === 'right') $origCell.after($td);else $origCell.before($td);
      });
    },
    removeHead: function removeHead() {
      var $head = this.$element.find('thead');
      if ($head.length !== 0) $head.remove();
    },
    removeRow: function removeRow(current) {
      var $current = $R.dom(current);
      var $currentRow = $current.closest('tr');
      $currentRow.remove();
    },
    removeColumn: function removeColumn(current) {
      var $current = $R.dom(current);
      var $currentRow = $current.closest('tr');
      var $currentCell = $current.closest('td, th');
      var index = 0;
      $currentRow.find('td, th').each(function (node, i) {
        if (node === $currentCell.get()) index = i;
      });
      this.$element.find('tr').each(function (node) {
        var $node = $R.dom(node);
        var origCell = $node.find('td, th').get(index);
        var $origCell = $R.dom(origCell);
        $origCell.remove();
      });
    },
    // private
    _init: function _init(el) {
      var wrapper, element;

      if (typeof el !== 'undefined') {
        var $node = $R.dom(el);
        var node = $node.get();
        var $figure = $node.closest('figure');

        if ($figure.length !== 0) {
          wrapper = $figure;
          element = $figure.find('table').get();
        } else if (node.tagName === 'TABLE') {
          element = node;
        }
      }

      this._buildWrapper(wrapper);

      this._buildElement(element);

      this._initWrapper();
    },
    _addRowTo: function _addRowTo(current, position) {
      var $current = $R.dom(current);
      var $currentRow = $current.closest('tr');

      if ($currentRow.length !== 0) {
        var columns = $currentRow.children('td, th').length;

        var $newRow = this._buildRow(columns);

        $currentRow[position]($newRow);
        return $newRow;
      }
    },
    _buildRow: function _buildRow(columns, tag) {
      tag = tag || '<td>';
      var $row = $R.dom('<tr>');

      for (var i = 0; i < columns; i++) {
        var $cell = $R.dom(tag);
        $cell.attr('contenteditable', true);
        $cell.html('<div data-redactor-tag="tbr"></div>');
        $row.append($cell);
      }

      return $row;
    },
    _buildElement: function _buildElement(node) {
      if (node) {
        this.$element = $R.dom(node);
      } else {
        this.$element = $R.dom('<table>');
        this.append(this.$element);
      }
    },
    _buildWrapper: function _buildWrapper(node) {
      node = node || '<figure>';
      this.parse(node);
    },
    _initWrapper: function _initWrapper() {
      this.addClass('redactor-component');
      this.attr({
        'data-redactor-type': 'table',
        'tabindex': '-1',
        'contenteditable': false
      });

      if (this.app.detector.isIe()) {
        this.removeAttr('contenteditable');
      }
    }
  });
})(Redactor);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvUmVkYWN0b3IvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL1JlZGFjdG9yL0ZpZWxkLnZ1ZT9hMTJjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL1JlZGFjdG9yL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9SZWRhY3Rvci9GaWVsZC52dWU/ZmRkNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9SZWRhY3Rvci9GaWVsZC52dWU/NGE1MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdmVuZG9yL3JlZGFjdG9yL19wbHVnaW5zL3RhYmxlL3RhYmxlLmpzIl0sIm5hbWVzIjpbIiRSIiwiYWRkIiwidHJhbnNsYXRpb25zIiwiZW4iLCJpbml0IiwiYXBwIiwibGFuZyIsIm9wdHMiLCJjYXJldCIsImVkaXRvciIsInRvb2xiYXIiLCJjb21wb25lbnQiLCJpbnNwZWN0b3IiLCJpbnNlcnRpb24iLCJzZWxlY3Rpb24iLCJvbmRyb3Bkb3duIiwidGFibGUiLCJvYnNlcnZlIiwiZHJvcGRvd24iLCJfb2JzZXJ2ZURyb3Bkb3duIiwib25ib3R0b21jbGljayIsImluc2VydFRvRW5kIiwiZ2V0TGFzdE5vZGUiLCJzdGFydCIsInRpdGxlIiwiZ2V0IiwiYXBpIiwiY2xhc3NuYW1lIiwib2JqIiwiJGJ1dHRvbiIsImFkZEJ1dHRvbkJlZm9yZSIsInNldEljb24iLCJzZXREcm9wZG93biIsImluc2VydCIsInJvd3MiLCJjb2x1bW5zIiwiJGNvbXBvbmVudCIsImNyZWF0ZSIsImkiLCJhZGRSb3ciLCJpbnNlcnRIdG1sIiwic2V0U3RhcnQiLCJhZGRSb3dBYm92ZSIsIl9nZXRDb21wb25lbnQiLCJjdXJyZW50IiwiZ2V0Q3VycmVudCIsIiRyb3ciLCJhZGRSb3dUbyIsImFkZFJvd0JlbG93IiwiYWRkQ29sdW1uTGVmdCIsInNhdmUiLCJhZGRDb2x1bW5UbyIsInJlc3RvcmUiLCJhZGRDb2x1bW5SaWdodCIsImFkZEhlYWQiLCJkZWxldGVIZWFkIiwiJGhlYWQiLCJkb20iLCJjbG9zZXN0IiwibGVuZ3RoIiwicmVtb3ZlSGVhZCIsImRlbGV0ZUNvbHVtbiIsIiRjdXJyZW50Q2VsbCIsIm5leHRDZWxsIiwibmV4dEVsZW1lbnQiLCJwcmV2Q2VsbCIsInByZXZFbGVtZW50IiwicmVtb3ZlQ29sdW1uIiwic2V0RW5kIiwiZGVsZXRlVGFibGUiLCJkZWxldGVSb3ciLCIkY3VycmVudFJvdyIsIm5leHRSb3ciLCJwcmV2Um93IiwicmVtb3ZlUm93IiwiX2dldFRhYmxlIiwicmVtb3ZlIiwiZGF0YSIsInBhcnNlIiwiaXNUYWJsZSIsImdldFRhYmxlIiwiaXRlbXMiLCJnZXRJdGVtc0J5Q2xhc3MiLCJ0YWJsZUl0ZW0iLCJnZXRJdGVtIiwiX29ic2VydmVJdGVtcyIsImRpc2FibGUiLCJlbmFibGUiLCJ0eXBlIiwiUmVkYWN0b3IiLCJtaXhpbnMiLCJlbCIsImNtbnQiLCJ1bmRlZmluZWQiLCJfaW5pdCIsIiRlbGVtZW50IiwiZmluZCIsImZpcnN0IiwiY2hpbGRyZW4iLCJfYnVpbGRSb3ciLCJhcHBlbmQiLCJwcmVwZW5kIiwiX2FkZFJvd1RvIiwiJGN1cnJlbnQiLCJpbmRleCIsImVhY2giLCJub2RlIiwiJG5vZGUiLCJvcmlnQ2VsbCIsIiRvcmlnQ2VsbCIsIiR0ZCIsImNsb25lIiwiaHRtbCIsImFmdGVyIiwiYmVmb3JlIiwid3JhcHBlciIsImVsZW1lbnQiLCIkZmlndXJlIiwidGFnTmFtZSIsIl9idWlsZFdyYXBwZXIiLCJfYnVpbGRFbGVtZW50IiwiX2luaXRXcmFwcGVyIiwicG9zaXRpb24iLCIkbmV3Um93IiwidGFnIiwiJGNlbGwiLCJhdHRyIiwiYWRkQ2xhc3MiLCJkZXRlY3RvciIsImlzSWUiLCJyZW1vdmVBdHRyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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SSxDQUFDc0QsTUFBTCxDQUFZeUIsS0FBWjtBQUNIOztBQUVELGFBQU8vRSxJQUFQO0FBQ0gsS0FqSjhCO0FBa0ovQjBFLGlCQUFhLEVBQUUsdUJBQVNkLElBQVQsRUFDZjtBQUNJLFVBQUlBLElBQUosRUFDQTtBQUNJLGFBQUtYLFFBQUwsR0FBZ0IvRixFQUFFLENBQUN5RCxHQUFILENBQU9pRCxJQUFQLENBQWhCO0FBQ0gsT0FIRCxNQUtBO0FBQ0ksYUFBS1gsUUFBTCxHQUFnQi9GLEVBQUUsQ0FBQ3lELEdBQUgsQ0FBTyxTQUFQLENBQWhCO0FBQ0EsYUFBSzJDLE1BQUwsQ0FBWSxLQUFLTCxRQUFqQjtBQUNIO0FBQ0osS0E3SjhCO0FBOEovQndCLGlCQUFhLEVBQUUsdUJBQVNiLElBQVQsRUFDZjtBQUNJQSxVQUFJLEdBQUdBLElBQUksSUFBSSxVQUFmO0FBRUEsV0FBSzVCLEtBQUwsQ0FBVzRCLElBQVg7QUFDSCxLQW5LOEI7QUFvSy9CZSxnQkFBWSxFQUFFLHdCQUNkO0FBQ0ksV0FBS00sUUFBTCxDQUFjLG9CQUFkO0FBQ0EsV0FBS0QsSUFBTCxDQUFVO0FBQ04sOEJBQXNCLE9BRGhCO0FBRU4sb0JBQVksSUFGTjtBQUdOLDJCQUFtQjtBQUhiLE9BQVY7O0FBTUEsVUFBSSxLQUFLekgsR0FBTCxDQUFTMkgsUUFBVCxDQUFrQkMsSUFBbEIsRUFBSixFQUNBO0FBQ0ksYUFBS0MsVUFBTCxDQUFnQixpQkFBaEI7QUFDSDtBQUNKO0FBakw4QixHQUFuQztBQW9MSCxDQXRMRCxFQXNMR3pDLFFBdExILEUiLCJmaWxlIjoianMvY2h1bmtzLzQ4LmpzP2lkPTNjNDdjMGE2YTNjNGQzMTM3YzMzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxyZWRhY3RvclxuICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgIDpsYWJlbD1cImZpZWxkLm5hbWVcIlxuICAgICAgICA6aGVscD1cImZpZWxkLmhlbHBcIlxuICAgICAgICA6cGxhY2Vob2xkZXI9XCJmaWVsZC5zZXR0aW5ncy5wbGFjZWhvbGRlclwiXG4gICAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50KVwiXG4gICAgICAgIDpjb25maWc9XCJ7XG4gICAgICAgICAgICBwbHVnaW5zOiBbJ3RhYmxlJ11cbiAgICAgICAgfVwiXG4gICAgPjwvcmVkYWN0b3I+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCAnLi4vLi4vLi4vdmVuZG9yL3JlZGFjdG9yL19wbHVnaW5zL3RhYmxlL3RhYmxlLmpzJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAncmVkYWN0b3ItZmllbGR0eXBlJyxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwicmVkYWN0b3JcIiwge1xuICAgIGF0dHJzOiB7XG4gICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlLFxuICAgICAgbGFiZWw6IF92bS5maWVsZC5uYW1lLFxuICAgICAgaGVscDogX3ZtLmZpZWxkLmhlbHAsXG4gICAgICBwbGFjZWhvbGRlcjogX3ZtLmZpZWxkLnNldHRpbmdzLnBsYWNlaG9sZGVyLFxuICAgICAgdmFsdWU6IF92bS52YWx1ZSxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBwbHVnaW5zOiBbXCJ0YWJsZVwiXVxuICAgICAgfVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImlucHV0XCIsICRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTljYmQxMWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHdhbXA2NFxcXFx3d3dcXFxcYW50XFxcXGNlbGVjdHJpY1xcXFx2ZW5kb3JcXFxcZnVzaW9uY21zXFxcXGNtc1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5OWNiZDExZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5OWNiZDExZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5OWNiZDExZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk5Y2JkMTFlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzk5Y2JkMTFlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZmllbGR0eXBlcy9SZWRhY3Rvci9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk5Y2JkMTFlJlwiIiwiKGZ1bmN0aW9uKCRSKVxue1xuICAgICRSLmFkZCgncGx1Z2luJywgJ3RhYmxlJywge1xuICAgICAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgICAgICAgIGVuOiB7XG4gICAgICAgIFx0XHRcInRhYmxlXCI6IFwiVGFibGVcIixcbiAgICAgICAgXHRcdFwiaW5zZXJ0LXRhYmxlXCI6IFwiSW5zZXJ0IHRhYmxlXCIsXG4gICAgICAgIFx0XHRcImluc2VydC1yb3ctYWJvdmVcIjogXCJJbnNlcnQgcm93IGFib3ZlXCIsXG4gICAgICAgIFx0XHRcImluc2VydC1yb3ctYmVsb3dcIjogXCJJbnNlcnQgcm93IGJlbG93XCIsXG4gICAgICAgIFx0XHRcImluc2VydC1jb2x1bW4tbGVmdFwiOiBcIkluc2VydCBjb2x1bW4gbGVmdFwiLFxuICAgICAgICBcdFx0XCJpbnNlcnQtY29sdW1uLXJpZ2h0XCI6IFwiSW5zZXJ0IGNvbHVtbiByaWdodFwiLFxuICAgICAgICBcdFx0XCJhZGQtaGVhZFwiOiBcIkFkZCBoZWFkXCIsXG4gICAgICAgIFx0XHRcImRlbGV0ZS1oZWFkXCI6IFwiRGVsZXRlIGhlYWRcIixcbiAgICAgICAgXHRcdFwiZGVsZXRlLWNvbHVtblwiOiBcIkRlbGV0ZSBjb2x1bW5cIixcbiAgICAgICAgXHRcdFwiZGVsZXRlLXJvd1wiOiBcIkRlbGV0ZSByb3dcIixcbiAgICAgICAgXHRcdFwiZGVsZXRlLXRhYmxlXCI6IFwiRGVsZXRlIHRhYmxlXCJcbiAgICAgICAgXHR9XG4gICAgICAgIH0sXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKGFwcClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgICAgICAgICB0aGlzLmxhbmcgPSBhcHAubGFuZztcbiAgICAgICAgICAgIHRoaXMub3B0cyA9IGFwcC5vcHRzO1xuICAgICAgICAgICAgdGhpcy5jYXJldCA9IGFwcC5jYXJldDtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yID0gYXBwLmVkaXRvcjtcbiAgICAgICAgICAgIHRoaXMudG9vbGJhciA9IGFwcC50b29sYmFyO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBhcHAuY29tcG9uZW50O1xuICAgICAgICAgICAgdGhpcy5pbnNwZWN0b3IgPSBhcHAuaW5zcGVjdG9yO1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRpb24gPSBhcHAuaW5zZXJ0aW9uO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBhcHAuc2VsZWN0aW9uO1xuICAgICAgICB9LFxuICAgICAgICAvLyBtZXNzYWdlc1xuICAgICAgICBvbmRyb3Bkb3duOiB7XG4gICAgICAgICAgICB0YWJsZToge1xuICAgICAgICAgICAgICAgIG9ic2VydmU6IGZ1bmN0aW9uKGRyb3Bkb3duKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZURyb3Bkb3duKGRyb3Bkb3duKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uYm90dG9tY2xpY2s6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRpb24uaW5zZXJ0VG9FbmQodGhpcy5lZGl0b3IuZ2V0TGFzdE5vZGUoKSwgJ3RhYmxlJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gcHVibGljXG4gICAgICAgIHN0YXJ0OiBmdW5jdGlvbigpXG4gICAgICAgIHtcblx0XHRcdHZhciBkcm9wZG93biA9IHtcbiAgICBcdFx0XHRvYnNlcnZlOiAndGFibGUnLFxuICAgIFx0XHRcdCdpbnNlcnQtdGFibGUnOiB7XG4gICAgXHRcdFx0XHR0aXRsZTogdGhpcy5sYW5nLmdldCgnaW5zZXJ0LXRhYmxlJyksXG4gICAgXHRcdFx0XHRhcGk6ICdwbHVnaW4udGFibGUuaW5zZXJ0J1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0J2luc2VydC1yb3ctYWJvdmUnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmxhbmcuZ2V0KCdpbnNlcnQtcm93LWFib3ZlJyksXG4gICAgXHRcdFx0XHRjbGFzc25hbWU6ICdyZWRhY3Rvci10YWJsZS1pdGVtLW9ic2VydmFibGUnLFxuICAgICAgICAgICAgICAgICAgICBhcGk6ICdwbHVnaW4udGFibGUuYWRkUm93QWJvdmUnXG4gICAgXHRcdFx0fSxcbiAgICBcdFx0XHQnaW5zZXJ0LXJvdy1iZWxvdyc6IHtcbiAgICAgICAgXHRcdFx0dGl0bGU6IHRoaXMubGFuZy5nZXQoJ2luc2VydC1yb3ctYmVsb3cnKSxcbiAgICAgICAgXHRcdFx0Y2xhc3NuYW1lOiAncmVkYWN0b3ItdGFibGUtaXRlbS1vYnNlcnZhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpOiAncGx1Z2luLnRhYmxlLmFkZFJvd0JlbG93J1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0J2luc2VydC1jb2x1bW4tbGVmdCc6IHtcbiAgICAgICAgXHRcdFx0dGl0bGU6IHRoaXMubGFuZy5nZXQoJ2luc2VydC1jb2x1bW4tbGVmdCcpLFxuICAgICAgICBcdFx0XHRjbGFzc25hbWU6ICdyZWRhY3Rvci10YWJsZS1pdGVtLW9ic2VydmFibGUnLFxuICAgICAgICAgICAgICAgICAgICBhcGk6ICdwbHVnaW4udGFibGUuYWRkQ29sdW1uTGVmdCdcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdCdpbnNlcnQtY29sdW1uLXJpZ2h0Jzoge1xuICAgICAgICBcdFx0XHR0aXRsZTogdGhpcy5sYW5nLmdldCgnaW5zZXJ0LWNvbHVtbi1yaWdodCcpLFxuICAgICAgICBcdFx0XHRjbGFzc25hbWU6ICdyZWRhY3Rvci10YWJsZS1pdGVtLW9ic2VydmFibGUnLFxuICAgICAgICAgICAgICAgICAgICBhcGk6ICdwbHVnaW4udGFibGUuYWRkQ29sdW1uUmlnaHQnXG4gICAgXHRcdFx0fSxcbiAgICBcdFx0XHQnYWRkLWhlYWQnOiB7XG4gICAgICAgIFx0XHRcdHRpdGxlOiB0aGlzLmxhbmcuZ2V0KCdhZGQtaGVhZCcpLFxuICAgICAgICBcdFx0XHRjbGFzc25hbWU6ICdyZWRhY3Rvci10YWJsZS1pdGVtLW9ic2VydmFibGUnLFxuICAgICAgICAgICAgICAgICAgICBhcGk6ICdwbHVnaW4udGFibGUuYWRkSGVhZCdcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdCdkZWxldGUtaGVhZCc6IHtcbiAgICAgICAgXHRcdFx0dGl0bGU6IHRoaXMubGFuZy5nZXQoJ2RlbGV0ZS1oZWFkJyksXG4gICAgICAgIFx0XHRcdGNsYXNzbmFtZTogJ3JlZGFjdG9yLXRhYmxlLWl0ZW0tb2JzZXJ2YWJsZScsXG4gICAgICAgICAgICAgICAgICAgIGFwaTogJ3BsdWdpbi50YWJsZS5kZWxldGVIZWFkJ1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0J2RlbGV0ZS1jb2x1bW4nOiB7XG4gICAgICAgIFx0XHRcdHRpdGxlOiB0aGlzLmxhbmcuZ2V0KCdkZWxldGUtY29sdW1uJyksXG4gICAgICAgIFx0XHRcdGNsYXNzbmFtZTogJ3JlZGFjdG9yLXRhYmxlLWl0ZW0tb2JzZXJ2YWJsZScsXG4gICAgICAgICAgICAgICAgICAgIGFwaTogJ3BsdWdpbi50YWJsZS5kZWxldGVDb2x1bW4nXG4gICAgXHRcdFx0fSxcbiAgICBcdFx0XHQnZGVsZXRlLXJvdyc6IHtcbiAgICAgICAgXHRcdFx0dGl0bGU6IHRoaXMubGFuZy5nZXQoJ2RlbGV0ZS1yb3cnKSxcbiAgICAgICAgXHRcdFx0Y2xhc3NuYW1lOiAncmVkYWN0b3ItdGFibGUtaXRlbS1vYnNlcnZhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpOiAncGx1Z2luLnRhYmxlLmRlbGV0ZVJvdydcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdCdkZWxldGUtdGFibGUnOiB7XG4gICAgICAgIFx0XHRcdHRpdGxlOiB0aGlzLmxhbmcuZ2V0KCdkZWxldGUtdGFibGUnKSxcbiAgICAgICAgXHRcdFx0Y2xhc3NuYW1lOiAncmVkYWN0b3ItdGFibGUtaXRlbS1vYnNlcnZhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpOiAncGx1Z2luLnRhYmxlLmRlbGV0ZVRhYmxlJ1xuICAgIFx0XHRcdH1cblx0XHRcdH07XG4gICAgICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmxhbmcuZ2V0KCd0YWJsZScpXG4gICAgICAgICAgICB9O1xuXG5cdFx0XHR2YXIgJGJ1dHRvbiA9IHRoaXMudG9vbGJhci5hZGRCdXR0b25CZWZvcmUoJ2xpbmsnLCAndGFibGUnLCBvYmopO1xuXHRcdFx0JGJ1dHRvbi5zZXRJY29uKCc8aSBjbGFzcz1cInJlLWljb24tdGFibGVcIj48L2k+Jyk7XG5cdFx0XHQkYnV0dG9uLnNldERyb3Bkb3duKGRyb3Bkb3duKTtcbiAgICAgICAgfSxcblx0XHRpbnNlcnQ6IGZ1bmN0aW9uKClcblx0XHR7XG4gICAgICAgICAgICB2YXIgcm93cyA9IDI7XG5cdFx0XHR2YXIgY29sdW1ucyA9IDM7XG5cdFx0XHR2YXIgJGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50LmNyZWF0ZSgndGFibGUnKTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByb3dzOyBpKyspXG5cdFx0XHR7XG5cdFx0XHQgICAgJGNvbXBvbmVudC5hZGRSb3coY29sdW1ucyk7XG5cdFx0XHR9XG5cblx0XHRcdCRjb21wb25lbnQgPSAgdGhpcy5pbnNlcnRpb24uaW5zZXJ0SHRtbCgkY29tcG9uZW50KTtcblx0XHRcdHRoaXMuY2FyZXQuc2V0U3RhcnQoJGNvbXBvbmVudCk7XG5cdFx0fSxcbiAgICAgICAgYWRkUm93QWJvdmU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRjb21wb25lbnQgPSB0aGlzLl9nZXRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIGlmICgkY29tcG9uZW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5zZWxlY3Rpb24uZ2V0Q3VycmVudCgpO1xuICAgICAgICAgICAgICAgIHZhciAkcm93ID0gJGNvbXBvbmVudC5hZGRSb3dUbyhjdXJyZW50LCAnYmVmb3JlJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhcmV0LnNldFN0YXJ0KCRyb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhZGRSb3dCZWxvdzogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgJGNvbXBvbmVudCA9IHRoaXMuX2dldENvbXBvbmVudCgpO1xuICAgICAgICAgICAgaWYgKCRjb21wb25lbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLnNlbGVjdGlvbi5nZXRDdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgdmFyICRyb3cgPSAkY29tcG9uZW50LmFkZFJvd1RvKGN1cnJlbnQsICdhZnRlcicpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJldC5zZXRTdGFydCgkcm93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWRkQ29sdW1uTGVmdDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgJGNvbXBvbmVudCA9IHRoaXMuX2dldENvbXBvbmVudCgpO1xuICAgICAgICAgICAgaWYgKCRjb21wb25lbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLnNlbGVjdGlvbi5nZXRDdXJyZW50KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zYXZlKCk7XG4gICAgICAgICAgICAgICAgJGNvbXBvbmVudC5hZGRDb2x1bW5UbyhjdXJyZW50LCAnbGVmdCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWRkQ29sdW1uUmlnaHQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRjb21wb25lbnQgPSB0aGlzLl9nZXRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIGlmICgkY29tcG9uZW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5zZWxlY3Rpb24uZ2V0Q3VycmVudCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc2F2ZSgpO1xuICAgICAgICAgICAgICAgICRjb21wb25lbnQuYWRkQ29sdW1uVG8oY3VycmVudCwgJ3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhZGRIZWFkOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciAkY29tcG9uZW50ID0gdGhpcy5fZ2V0Q29tcG9uZW50KCk7XG4gICAgICAgICAgICBpZiAoJGNvbXBvbmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zYXZlKCk7XG4gICAgICAgICAgICAgICAgJGNvbXBvbmVudC5hZGRIZWFkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGVIZWFkOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciAkY29tcG9uZW50ID0gdGhpcy5fZ2V0Q29tcG9uZW50KCk7XG4gICAgICAgICAgICBpZiAoJGNvbXBvbmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMuc2VsZWN0aW9uLmdldEN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICB2YXIgJGhlYWQgPSAkUi5kb20oY3VycmVudCkuY2xvc2VzdCgndGhlYWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoJGhlYWQubGVuZ3RoICE9PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC5yZW1vdmVIZWFkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZXQuc2V0U3RhcnQoJGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC5yZW1vdmVIZWFkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZUNvbHVtbjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgJGNvbXBvbmVudCA9IHRoaXMuX2dldENvbXBvbmVudCgpO1xuICAgICAgICAgICAgaWYgKCRjb21wb25lbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLnNlbGVjdGlvbi5nZXRDdXJyZW50KCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnRDZWxsID0gJFIuZG9tKGN1cnJlbnQpLmNsb3Nlc3QoJ3RkLCB0aCcpO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0Q2VsbCA9ICRjdXJyZW50Q2VsbC5uZXh0RWxlbWVudCgpLmdldCgpO1xuICAgICAgICAgICAgICAgIHZhciBwcmV2Q2VsbCA9ICRjdXJyZW50Q2VsbC5wcmV2RWxlbWVudCgpLmdldCgpO1xuXG4gICAgICAgICAgICAgICAgJGNvbXBvbmVudC5yZW1vdmVDb2x1bW4oY3VycmVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobmV4dENlbGwpIHRoaXMuY2FyZXQuc2V0U3RhcnQobmV4dENlbGwpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByZXZDZWxsKSB0aGlzLmNhcmV0LnNldEVuZChwcmV2Q2VsbCk7XG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmRlbGV0ZVRhYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZVJvdzogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgJGNvbXBvbmVudCA9IHRoaXMuX2dldENvbXBvbmVudCgpO1xuICAgICAgICAgICAgaWYgKCRjb21wb25lbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLnNlbGVjdGlvbi5nZXRDdXJyZW50KCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnRSb3cgPSAkUi5kb20oY3VycmVudCkuY2xvc2VzdCgndHInKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dFJvdyA9ICRjdXJyZW50Um93Lm5leHRFbGVtZW50KCkuZ2V0KCk7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZSb3cgPSAkY3VycmVudFJvdy5wcmV2RWxlbWVudCgpLmdldCgpO1xuXG4gICAgICAgICAgICAgICAgJGNvbXBvbmVudC5yZW1vdmVSb3coY3VycmVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobmV4dFJvdykgdGhpcy5jYXJldC5zZXRTdGFydChuZXh0Um93KTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcmV2Um93KSB0aGlzLmNhcmV0LnNldEVuZChwcmV2Um93KTtcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZGVsZXRlVGFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlVGFibGU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHRhYmxlID0gdGhpcy5fZ2V0VGFibGUoKTtcbiAgICAgICAgICAgIGlmICh0YWJsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5yZW1vdmUodGFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHByaXZhdGVcbiAgICAgICAgX2dldFRhYmxlOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5zZWxlY3Rpb24uZ2V0Q3VycmVudCgpO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmluc3BlY3Rvci5wYXJzZShjdXJyZW50KTtcbiAgICAgICAgICAgIGlmIChkYXRhLmlzVGFibGUoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5nZXRUYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBfZ2V0Q29tcG9uZW50OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5zZWxlY3Rpb24uZ2V0Q3VycmVudCgpO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmluc3BlY3Rvci5wYXJzZShjdXJyZW50KTtcbiAgICAgICAgICAgIGlmIChkYXRhLmlzVGFibGUoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBkYXRhLmdldFRhYmxlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuY3JlYXRlKCd0YWJsZScsIHRhYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX29ic2VydmVEcm9wZG93bjogZnVuY3Rpb24oZHJvcGRvd24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciB0YWJsZSA9IHRoaXMuX2dldFRhYmxlKCk7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBkcm9wZG93bi5nZXRJdGVtc0J5Q2xhc3MoJ3JlZGFjdG9yLXRhYmxlLWl0ZW0tb2JzZXJ2YWJsZScpO1xuICAgICAgICAgICAgdmFyIHRhYmxlSXRlbSA9IGRyb3Bkb3duLmdldEl0ZW0oJ2luc2VydC10YWJsZScpO1xuICAgICAgICAgICAgaWYgKHRhYmxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX29ic2VydmVJdGVtcyhpdGVtcywgJ2VuYWJsZScpO1xuICAgICAgICAgICAgICAgIHRhYmxlSXRlbS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZUl0ZW1zKGl0ZW1zLCAnZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgIHRhYmxlSXRlbS5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX29ic2VydmVJdGVtczogZnVuY3Rpb24oaXRlbXMsIHR5cGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXRlbXNbaV1bdHlwZV0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSkoUmVkYWN0b3IpO1xuKGZ1bmN0aW9uKCRSKVxue1xuICAgICRSLmFkZCgnY2xhc3MnLCAndGFibGUuY29tcG9uZW50Jywge1xuICAgICAgICBtaXhpbnM6IFsnZG9tJywgJ2NvbXBvbmVudCddLFxuICAgICAgICBpbml0OiBmdW5jdGlvbihhcHAsIGVsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmFwcCA9IGFwcDtcblxuICAgICAgICAgICAgLy8gaW5pdFxuICAgICAgICAgICAgcmV0dXJuIChlbCAmJiBlbC5jbW50ICE9PSB1bmRlZmluZWQpID8gZWwgOiB0aGlzLl9pbml0KGVsKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBwdWJsaWNcbiAgICAgICAgYWRkSGVhZDogZnVuY3Rpb24oKVxuICAgICAgICB7XG5cdFx0XHR0aGlzLnJlbW92ZUhlYWQoKTtcblxuXHRcdFx0dmFyIGNvbHVtbnMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ3RyJykuZmlyc3QoKS5jaGlsZHJlbigndGQsIHRoJykubGVuZ3RoO1xuXHRcdFx0dmFyICRoZWFkID0gJFIuZG9tKCc8dGhlYWQ+Jyk7XG4gICAgICAgICAgICB2YXIgJHJvdyA9IHRoaXMuX2J1aWxkUm93KGNvbHVtbnMsICc8dGg+Jyk7XG5cbiAgICAgICAgICAgICRoZWFkLmFwcGVuZCgkcm93KTtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQucHJlcGVuZCgkaGVhZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZFJvdzogZnVuY3Rpb24oY29sdW1ucylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRyb3cgPSB0aGlzLl9idWlsZFJvdyhjb2x1bW5zKTtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKCRyb3cpO1xuXG4gICAgICAgICAgICByZXR1cm4gJHJvdztcbiAgICAgICAgfSxcbiAgICAgICAgYWRkUm93VG86IGZ1bmN0aW9uKGN1cnJlbnQsIHR5cGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRSb3dUbyhjdXJyZW50LCB0eXBlKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkQ29sdW1uVG86IGZ1bmN0aW9uKGN1cnJlbnQsIHR5cGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciAkY3VycmVudCA9ICRSLmRvbShjdXJyZW50KTtcbiAgICAgICAgICAgIHZhciAkY3VycmVudFJvdyA9ICRjdXJyZW50LmNsb3Nlc3QoJ3RyJyk7XG4gICAgICAgICAgICB2YXIgJGN1cnJlbnRDZWxsID0gJGN1cnJlbnQuY2xvc2VzdCgndGQsIHRoJyk7XG5cbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgICAgICAkY3VycmVudFJvdy5maW5kKCd0ZCwgdGgnKS5lYWNoKGZ1bmN0aW9uKG5vZGUsIGkpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChub2RlID09PSAkY3VycmVudENlbGwuZ2V0KCkpIGluZGV4ID0gaTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLiRlbGVtZW50LmZpbmQoJ3RyJykuZWFjaChmdW5jdGlvbihub2RlKVxuXHRcdFx0e1xuICAgIFx0XHRcdHZhciAkbm9kZSA9ICRSLmRvbShub2RlKTtcblx0XHRcdFx0dmFyIG9yaWdDZWxsID0gJG5vZGUuZmluZCgndGQsIHRoJykuZ2V0KGluZGV4KTtcblx0XHRcdFx0dmFyICRvcmlnQ2VsbCA9ICRSLmRvbShvcmlnQ2VsbCk7XG5cblx0XHRcdFx0dmFyICR0ZCA9ICRvcmlnQ2VsbC5jbG9uZSgpO1xuXHRcdFx0XHQkdGQuaHRtbCgnPGRpdiBkYXRhLXJlZGFjdG9yLXRhZz1cInRiclwiPjwvZGl2PicpO1xuXG5cdFx0XHRcdGlmICh0eXBlID09PSAncmlnaHQnKSAkb3JpZ0NlbGwuYWZ0ZXIoJHRkKTtcblx0XHRcdFx0ZWxzZSAgICAgICAgICAgICAgICAgICRvcmlnQ2VsbC5iZWZvcmUoJHRkKTtcblx0XHRcdH0pO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVIZWFkOiBmdW5jdGlvbigpXG4gICAgICAgIHtcblx0XHRcdHZhciAkaGVhZCA9IHRoaXMuJGVsZW1lbnQuZmluZCgndGhlYWQnKTtcblx0XHRcdGlmICgkaGVhZC5sZW5ndGggIT09IDApICRoZWFkLnJlbW92ZSgpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVSb3c6IGZ1bmN0aW9uKGN1cnJlbnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciAkY3VycmVudCA9ICRSLmRvbShjdXJyZW50KTtcbiAgICAgICAgICAgIHZhciAkY3VycmVudFJvdyA9ICRjdXJyZW50LmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICAgICAgICAgICRjdXJyZW50Um93LnJlbW92ZSgpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVDb2x1bW46IGZ1bmN0aW9uKGN1cnJlbnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciAkY3VycmVudCA9ICRSLmRvbShjdXJyZW50KTtcbiAgICAgICAgICAgIHZhciAkY3VycmVudFJvdyA9ICRjdXJyZW50LmNsb3Nlc3QoJ3RyJyk7XG4gICAgICAgICAgICB2YXIgJGN1cnJlbnRDZWxsID0gJGN1cnJlbnQuY2xvc2VzdCgndGQsIHRoJyk7XG5cbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgICAgICAkY3VycmVudFJvdy5maW5kKCd0ZCwgdGgnKS5lYWNoKGZ1bmN0aW9uKG5vZGUsIGkpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChub2RlID09PSAkY3VycmVudENlbGwuZ2V0KCkpIGluZGV4ID0gaTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLiRlbGVtZW50LmZpbmQoJ3RyJykuZWFjaChmdW5jdGlvbihub2RlKVxuXHRcdFx0e1xuICAgIFx0XHRcdHZhciAkbm9kZSA9ICRSLmRvbShub2RlKTtcblx0XHRcdFx0dmFyIG9yaWdDZWxsID0gJG5vZGUuZmluZCgndGQsIHRoJykuZ2V0KGluZGV4KTtcblx0XHRcdFx0dmFyICRvcmlnQ2VsbCA9ICRSLmRvbShvcmlnQ2VsbCk7XG5cblx0XHRcdFx0JG9yaWdDZWxsLnJlbW92ZSgpO1xuXHRcdFx0fSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gcHJpdmF0ZVxuICAgICAgICBfaW5pdDogZnVuY3Rpb24oZWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyLCBlbGVtZW50O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbCAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyICRub2RlID0gJFIuZG9tKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9ICRub2RlLmdldCgpO1xuICAgICAgICAgICAgICAgIHZhciAkZmlndXJlID0gJG5vZGUuY2xvc2VzdCgnZmlndXJlJyk7XG4gICAgICAgICAgICAgICAgaWYgKCRmaWd1cmUubGVuZ3RoICE9PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlciA9ICRmaWd1cmU7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSAkZmlndXJlLmZpbmQoJ3RhYmxlJykuZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ1RBQkxFJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBub2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fYnVpbGRXcmFwcGVyKHdyYXBwZXIpO1xuICAgICAgICAgICAgdGhpcy5fYnVpbGRFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5faW5pdFdyYXBwZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgX2FkZFJvd1RvOiBmdW5jdGlvbihjdXJyZW50LCBwb3NpdGlvbilcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRjdXJyZW50ID0gJFIuZG9tKGN1cnJlbnQpO1xuICAgICAgICAgICAgdmFyICRjdXJyZW50Um93ID0gJGN1cnJlbnQuY2xvc2VzdCgndHInKTtcbiAgICAgICAgICAgIGlmICgkY3VycmVudFJvdy5sZW5ndGggIT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbHVtbnMgPSAkY3VycmVudFJvdy5jaGlsZHJlbigndGQsIHRoJykubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciAkbmV3Um93ID0gdGhpcy5fYnVpbGRSb3coY29sdW1ucyk7XG5cbiAgICAgICAgICAgICAgICAkY3VycmVudFJvd1twb3NpdGlvbl0oJG5ld1Jvdyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJG5ld1JvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX2J1aWxkUm93OiBmdW5jdGlvbihjb2x1bW5zLCB0YWcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRhZyA9IHRhZyB8fCAnPHRkPic7XG5cbiAgICAgICAgICAgIHZhciAkcm93ID0gJFIuZG9tKCc8dHI+Jyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbHVtbnM7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgJGNlbGwgPSAkUi5kb20odGFnKTtcbiAgICAgICAgICAgICAgICAkY2VsbC5hdHRyKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAkY2VsbC5odG1sKCc8ZGl2IGRhdGEtcmVkYWN0b3ItdGFnPVwidGJyXCI+PC9kaXY+Jyk7XG5cbiAgICAgICAgICAgICAgICAkcm93LmFwcGVuZCgkY2VsbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAkcm93O1xuICAgICAgICB9LFxuICAgICAgICBfYnVpbGRFbGVtZW50OiBmdW5jdGlvbihub2RlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAobm9kZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50ID0gJFIuZG9tKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkUi5kb20oJzx0YWJsZT4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZCh0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX2J1aWxkV3JhcHBlcjogZnVuY3Rpb24obm9kZSlcbiAgICAgICAge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUgfHwgJzxmaWd1cmU+JztcblxuICAgICAgICAgICAgdGhpcy5wYXJzZShub2RlKTtcbiAgICAgICAgfSxcbiAgICAgICAgX2luaXRXcmFwcGVyOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoJ3JlZGFjdG9yLWNvbXBvbmVudCcpO1xuICAgICAgICAgICAgdGhpcy5hdHRyKHtcbiAgICAgICAgICAgICAgICAnZGF0YS1yZWRhY3Rvci10eXBlJzogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnLFxuICAgICAgICAgICAgICAgICdjb250ZW50ZWRpdGFibGUnOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFwcC5kZXRlY3Rvci5pc0llKCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG59KShSZWRhY3Rvcik7Il0sInNvdXJjZVJvb3QiOiIifQ==