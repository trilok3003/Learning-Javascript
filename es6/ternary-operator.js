// The ternary operator is a simplified conditional operator like if / else.

// old way
if (authenticated) {
    renderApp();
  } else {
    renderLogin();
  }
  // new way
  authenticated ? renderApp() : renderLogin();