import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnInit{
  menuItems: any[] = []; // Array to store menu items  
  isHovered: boolean = false;
  hoveredSubMenu: string = ''; // Track the hovered submenu item by menuId
  activeSubMenu: string = ''; // Track the active submenu (clicked item)
  
  
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    // Subscribe to the menu observable
    this.authService.menu$.subscribe((menuData) => {
      console.log('Received menu data:', menuData); // For debugging      
      this.menuItems = this.buildMenu(menuData); // Build the hierarchical menu
      
    });
    
  }

//  // Toggle the submenu visibility on hover
//  toggleSubMenu(menuItem: any, isOpen: boolean): void {
//   if (menuItem.children && menuItem.children.length > 0) {
//     menuItem.isOpen = isOpen; // Toggle open/close state on hover
//   }
// }

// // Open submenu on click and keep it open
// openSubMenu(menuItem: any): void {
//   if (menuItem.children && menuItem.children.length > 0) {
//     menuItem.isOpen = !menuItem.isOpen; // Toggle open/close state on click
//   }
// }

// // Prevent submenu from closing when clicking a submenu item
// onSubMenuClick(event: MouseEvent): void {
//   event.stopPropagation(); // Prevent closing the submenu when clicking a submenu item
// }

toggleSubMenu(menuItem: any): void {
  // Toggle the isOpen flag for displaying/hiding submenus
  menuItem.isOpen = !menuItem.isOpen;
  console.log(`Toggled submenu for: ${menuItem.menuName}, isOpen: ${menuItem.isOpen}`);
}

onSubMenuClick(menuItem: any): void {
  // Set active submenu item on click
  this.activeSubMenu = menuItem.menuId;
  console.log(`Clicked on submenu: ${menuItem.menuName}`);
}

// Track which submenu item is hovered
onSubMenuHover(menuId: string): void {
  this.hoveredSubMenu = menuId;
}

onSubMenuLeave(): void {
  this.hoveredSubMenu = ''; // Reset hover state when mouse leaves
}

// Implement the openSubMenu method
openSubMenu(menuItem: any): void {
  menuItem.isOpen = !menuItem.isOpen;
  console.log(`Submenu for ${menuItem.menuName} opened or closed`);
}


buildMenu(menuItems: any[]): any[] {
  const menuMap = new Map();

  // Map all items by menuId
  menuItems.forEach((item) => menuMap.set(item.menuId, { ...item, children: [], isOpen: false }));

  const nestedMenu: any[] = [];

  // Link parents with their children
  menuItems.forEach((item) => {
    if (item.menuId !== item.parentId) {
      const parent = menuMap.get(item.parentId);
      if (parent) {
        parent.children.push(menuMap.get(item.menuId));
      }
    } else {
      nestedMenu.push(menuMap.get(item.menuId));
    }
  });

  return nestedMenu;
}
calculateMenuItemCssClass(link: string): string {
  // Return a string (can be empty) for dynamic class logic
  return link === '/apps' ? 'active' : '';
}
}
