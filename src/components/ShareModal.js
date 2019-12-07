import React, { Component } from "react";

export default class ShareModal extends Component {
  copyCodeToClipboard = () => {
    const el = this.textArea;
    el.select();
    document.execCommand("copy");
  };
  render() {
    return (
      <div
        class="modal fade"
        data-backdrop="false"
        id="basicExampleModal3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ zIndex: 555555 }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Share page for evaluation
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <textarea
                ref={textarea => (this.textArea = textarea)}
                value={`${window.location.href}e`}
              ></textarea>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                onClick={() => this.copyCodeToClipboard()}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
